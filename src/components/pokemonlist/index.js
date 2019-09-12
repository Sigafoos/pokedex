import { h, Component } from 'preact';
import Pokemon from '../pokemon';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

class PokemonList extends Component {
	render({ pokemon, moves, ...rest }, _) {
		let list = [];
		for (let id in pokemon) {
			let p = pokemon[id];
			let types = [p.type, p.type2];
			p.types = types;
			list.push(p);
		}

		return (
			<div id="pokemonlist">
					<LayoutGrid.Inner>
			{list.map(p => (
				<LayoutGrid.Cell desktopCols="3" tabletCols="4" phoneCols="4">
					<Pokemon
						id={p.pokemonId}
						moveList={moves}
						chargeMoves={p.cinematicMoves}
						{...p}
						{...rest}
					/>
				</LayoutGrid.Cell>
			))}
					</LayoutGrid.Inner>
			</div>
		);
	}
}

export default PokemonList;
