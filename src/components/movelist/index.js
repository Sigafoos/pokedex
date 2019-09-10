import { h, Component } from 'preact';
import { QuickMove, ChargeMove } from '../moves';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

class MoveList extends Component {
	render({ list, quickMoves, chargeMoves }, _) {
		return (
			<div class="moves">
				<h3>Moves</h3>

				{quickMoves && (
					<div class="quick">
						<h4>Quick</h4>
						{quickMoves.map(move => <QuickMove move={list[move]} />)}
						<Typography caption>damage / energy / turns / DPT / EPT</Typography>
					</div>
				)}

				{chargeMoves && (
					<div class="charge">
						<h4>Charge</h4>
						{chargeMoves.map(move => <ChargeMove move={list[move]} />)}
						<Typography caption>damage / energy / DPE</Typography>
					</div>
				)}

			</div>
		);
	}
}

export default MoveList;
