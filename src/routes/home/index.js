import { h } from 'preact';
import style from './style';
import Pokedex from '../../components/pokedex';

const Home = () => (
	<div class={style.home}>
		<Pokedex />
	</div>
);

export default Home;
