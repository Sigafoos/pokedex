import { h } from 'preact';
import style from './style';
import Pokedex from '../../components/pokedex';

const Home = () => (
	<div class={style.home}>
		<h1>Pokedex</h1>

		<Pokedex />
	</div>
);

export default Home;
