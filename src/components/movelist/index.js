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
		let { onMoveSelect, onMoveUnselect } = this.props,
			moveName = move.uniqueId;

		if (fast) {
			let { selectedFast } = this.state;
			if (move.uniqueId == selectedFast) {
				onMoveUnselect(moveName);
				this.setState({ selectedFast: undefined });
			} else {
				onMoveSelect(moveName);
				selectedFast && onMoveUnselect(selectedFast);
				this.setState({ selectedFast: moveName });
			}
		} else {
			let charged = this.state.selectedCharge;
			let i = charged.indexOf(moveName);
			if (i !== -1) {
				onMoveUnselect(moveName);
				charged.splice(i, 1);
			} else {
				charged.push(moveName);
				onMoveSelect(moveName)
				if (charged.length > 2) {
					let unselected = charged.shift();
					onMoveUnselect(unselected);
				}
			}
			this.setState({ selectedCharge: charged });
		}
	}

	render({ list, quickMoves, chargeMoves, legacyMoves = {}, onMoveSelect }, { selectedFast, selectedCharge }) {
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
								onSelect={onMoveSelect && this.onSelect}
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
								onSelect={onMoveSelect && this.onSelect}
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
