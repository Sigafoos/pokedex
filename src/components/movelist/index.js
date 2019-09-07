import { h, Component } from 'preact';
import { QuickMove, ChargeMove } from '../moves';

class MoveList extends Component {
	render({ list, quickMoves, chargeMoves }, _) {
		return (
			<div class="moves">
				<h2>Moves</h2>

				{quickMoves && (
					<div class="quick">
						<h3>Quick</h3>
						{quickMoves.map(move => <QuickMove move={move} list={list} />)}
					</div>
				)}

				{chargeMoves && (
					<div class="charge">
						<h3>Charge</h3>
						{chargeMoves.map(move => <ChargeMove move={move} list={list} />)}
					</div>
				)}

			</div>
		);
	}
}

export default MoveList;
