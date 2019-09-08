import { h, Component } from 'preact';
import { QuickMove, ChargeMove } from '../moves';

class MoveList extends Component {
	render({ list, quickMoves, chargeMoves }, _) {
		return (
			<div class="moves">
				<h3>Moves</h3>

				{quickMoves && (
					<div class="quick">
						<h4>Quick</h4>
						{quickMoves.map(move => <QuickMove move={move} list={list} />)}
					</div>
				)}

				{chargeMoves && (
					<div class="charge">
						<h4>Charge</h4>
						{chargeMoves.map(move => <ChargeMove move={move} list={list} />)}
					</div>
				)}

			</div>
		);
	}
}

export default MoveList;
