import { h } from 'preact';
import style from './style';
import TypeIcon from '../typeicon';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';

const Pokemon = ({ id, types }) => (
	<Card class={style.card}>
	<h1>{id}</h1>
	<div class="types">
		<TypeIcon type={types[0]} />
		<TypeIcon type={types[1]} />
	</div>
	</Card>
);

export default Pokemon;
