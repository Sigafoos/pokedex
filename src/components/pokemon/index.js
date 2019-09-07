import { h } from 'preact';
import style from './style';
import MoveList from '../movelist';
import TypeIcon from '../typeicon';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';

const Pokemon = ({ id, types, moveList, quickMoves, chargeMoves }) => (
	<Card class={style.card}>
		<div class="card-header">
			<h2 class="mdc-typography--title">{id}</h2>
			<div class="types">
				<TypeIcon type={types[0]} />
				<TypeIcon type={types[1]} />
			</div>
		</div>

		<MoveList quickMoves={quickMoves} chargeMoves={chargeMoves} list={chargeMoves} />
	</Card>
);

export default Pokemon;
