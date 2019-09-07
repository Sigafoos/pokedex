import { h, Component } from 'preact';
import Pokemon from '../pokemon';

class PokemonList extends Component {
	render({ pokemon, moves }, _) {
		let list = [];
		for (let id in pokemon) {
			let p = pokemon[id];
			let types = [p.type, p.type2];
			p.types = types;
			list.push(p);
		}

		return (
			<div id="pokemonlist">
			{list.map(p => (
				<Pokemon
				id={p.pokemonId}
				types={p.types}
				moveList={moves}
				quickMoves={p.quickMoves}
				chargeMoves={p.cinematicMoves}
				/>))}
			</div>
		);
	}
}

export default PokemonList;
