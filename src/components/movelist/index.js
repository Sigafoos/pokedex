import { h, Component } from 'preact';
import Move from '../moves';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

class MoveList extends Component {
	state = {
		selectedFast: undefined,
		selectedCharge: []
	}

	onSelect = ({ move, fast }) => {
		if (fast) {
			if (move.uniqueId == this.state.selectedFast) {
				this.setState({ selectedFast: undefined });
			} else {
				this.setState({ selectedFast: move.uniqueId });
			}
		} else {
			let charged = this.state.selectedCharge;
			let i = charged.indexOf(move.uniqueId);
			if (i !== -1) {
				charged.splice(i, 1);
			} else {
				charged.push(move.uniqueId);
				if (charged.length > 2) {
					charged.shift();
				}
			}
			this.setState({ selectedCharge: charged });
		}
	}

	render({ list, quickMoves, chargeMoves, legacyMoves = {} }, { selectedFast, selectedCharge }) {
		let { charge: legacyCharge, quick: legacyQuick } = legacyMoves;
		let fastMove;
		if (selectedFast) {
			fastMove = list[selectedFast];
		}

		return (
			<div class="moves">
				<h3>Moves</h3>

				{quickMoves && (
					<div class="quick">
						<h4>Quick</h4>
						{quickMoves.map(move => (
							<Move quick
								move={list[move]}
								onSelect={this.onSelect}
								selected={selectedFast && move === selectedFast}
								legacy={legacyQuick && legacyQuick.indexOf(move) !== -1}
							/>
						))}
						<Typography caption>damage / energy / turns / DPT / EPT</Typography>
					</div>
				)}

				{chargeMoves && (
					<div class="charge">
						<h4>Charge</h4>
						{chargeMoves.map(move => (
							<Move charge
								move={list[move]}
								onSelect={this.onSelect}
								selected={selectedCharge.indexOf(move) !== -1}
								legacy={legacyCharge && legacyCharge.indexOf(move) !== -1}
								fastEnergy={fastMove && fastMove.energyDelta}
							/>
						))}
						<Typography caption>damage / energy / DPE {fastMove && " (quick moves required)"}</Typography>
					</div>
				)}

			</div>
		);
	}
}

export default MoveList;
