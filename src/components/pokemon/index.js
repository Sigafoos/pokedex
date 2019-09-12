import { h } from 'preact';
import style from './style';
import MoveList from '../movelist';
import Stats from '../stats';
import TypeIcon from '../typeicon';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';

const Pokemon = ({ id, types, moveList, quickMoves, stats, chargeMoves, legacyMoves, alolan, onChoose, chooseIcon }) => (
	<Card class={style.card}>
		<div class="card-header">
			<h2 class="mdc-typography--title">{id} {alolan && (<span>(Alolan)</span>)}</h2>
			<div class="types">
				<TypeIcon type={types[0]} />
				<TypeIcon type={types[1]} />
			</div>
		</div>

		<Stats stats={stats} />

		<MoveList quickMoves={quickMoves} chargeMoves={chargeMoves} legacyMoves={legacyMoves} list={moveList} />

		<Card.Actions>
			<Card.ActionIcons>
				<Card.ActionIcon onClick={() => onChoose(id)}>{chooseIcon}</Card.ActionIcon>
			</Card.ActionIcons>
		</Card.Actions>
	</Card>
);

export default Pokemon;
