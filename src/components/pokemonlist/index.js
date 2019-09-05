import { h, Component } from 'preact';
import Pokemon from '../pokemon';

class PokemonList extends Component {
	render({ pokemon }, _) {
		let list = [];
		for (let id in pokemon) {
			let { pokemonId, type, type2 } = pokemon[id];
			let types = [type, type2];
			list.push({ id, types });
		}
		console.log(list);

		return (
			<div id="pokemonlist">
			{list.map(p => (<Pokemon id={p.id} types={p.types} />))}
			</div>
		);
	}
}

export default PokemonList;
