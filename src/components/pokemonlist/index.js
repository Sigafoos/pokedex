import { h, Component } from 'preact';
import Pokemon from '../pokemon';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

class PokemonList extends Component {
	render({ pokemon, moves, onChoose, chooseIcon }, _) {
		if (!pokemon) return;

		let list = [];
		for (let id in pokemon) {
			let p = pokemon[id];
			let types = [p.type, p.type2];
			p.types = types;
			list.push(p);
		}

		return (
			<div id="pokemonlist">
				<LayoutGrid>
					<LayoutGrid.Inner>
			{list.map(p => (
				<LayoutGrid.Cell cols="3">
					<Pokemon
						id={p.pokemonId}
						moveList={moves}
						chargeMoves={p.cinematicMoves}
						onChoose={onChoose}
						chooseIcon={chooseIcon}
						{...p}
					/>
				</LayoutGrid.Cell>
			))}
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}

export default PokemonList;
