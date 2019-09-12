import { h, Component } from 'preact';
import style from './style';
import TypeIcon from '../typeicon';
import Effectiveness from '../effectiveness';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

class EffectivenessMatrix extends Component {
	order = [
		'POKEMON_TYPE_NORMAL',
		'POKEMON_TYPE_FIRE',
		'POKEMON_TYPE_WATER',
		'POKEMON_TYPE_ELECTRIC',
		'POKEMON_TYPE_GRASS',
		'POKEMON_TYPE_ICE',
		'POKEMON_TYPE_FIGHTING',
		'POKEMON_TYPE_POISON',
		'POKEMON_TYPE_GROUND',
		'POKEMON_TYPE_FLYING',
		'POKEMON_TYPE_PSYCHIC',
		'POKEMON_TYPE_BUG',
		'POKEMON_TYPE_ROCK',
		'POKEMON_TYPE_GHOST',
		'POKEMON_TYPE_DRAGON',
		'POKEMON_TYPE_DARK',
		'POKEMON_TYPE_STEEL',
		'POKEMON_TYPE_FAIRY'
	];

	mapped = {
		POKEMON_TYPE_NORMAL: 0,
		POKEMON_TYPE_FIGHTING: 1,
		POKEMON_TYPE_FLYING: 2,
		POKEMON_TYPE_POISON: 3,
		POKEMON_TYPE_GROUND: 4,
		POKEMON_TYPE_ROCK: 5,
		POKEMON_TYPE_BUG: 6,
		POKEMON_TYPE_GHOST: 7,
		POKEMON_TYPE_STEEL: 8,
		POKEMON_TYPE_FIRE: 9,
		POKEMON_TYPE_WATER: 10,
		POKEMON_TYPE_GRASS: 11,
		POKEMON_TYPE_ELECTRIC: 12,
		POKEMON_TYPE_PSYCHIC: 13,
		POKEMON_TYPE_ICE: 14,
		POKEMON_TYPE_DRAGON: 15,
		POKEMON_TYPE_DARK: 16,
		POKEMON_TYPE_FAIRY: 17
	}

	render({ pokemon, effectiveness, selectedMoves }) {
		let defender = {
			POKEMON_TYPE_NORMAL: [],
			POKEMON_TYPE_FIRE: [],
			POKEMON_TYPE_WATER: [],
			POKEMON_TYPE_ELECTRIC: [],
			POKEMON_TYPE_GRASS: [],
			POKEMON_TYPE_ICE: [],
			POKEMON_TYPE_FIGHTING: [],
			POKEMON_TYPE_POISON: [],
			POKEMON_TYPE_GROUND: [],
			POKEMON_TYPE_FLYING: [],
			POKEMON_TYPE_PSYCHIC: [],
			POKEMON_TYPE_BUG: [],
			POKEMON_TYPE_ROCK: [],
			POKEMON_TYPE_GHOST: [],
			POKEMON_TYPE_DRAGON: [],
			POKEMON_TYPE_DARK: [],
			POKEMON_TYPE_STEEL: [],
			POKEMON_TYPE_FAIRY: []
		};
		let attacker = JSON.parse(JSON.stringify(defender));

		for (let name in pokemon) {
			let p = pokemon[name];
			for (let attacker in effectiveness) {
				let e = 1;
				for (let type of p.types) {
					if (type == undefined) continue;
					e *= effectiveness[attacker].attackScalar[this.mapped[type]];
				}
				defender[attacker].push(e);
			}
		}

		for (let move of selectedMoves) {
			for (let defender in effectiveness) {
				attacker[defender].push(effectiveness[move.type].attackScalar[this.mapped[defender]]);
			}
		}

		return (
			<div class="effectiveness">
				<h2>Effectiveness</h2>
				<LayoutGrid>
			<h3>Defense</h3>
					<LayoutGrid.Inner>
						{this.order.map(type => (
							<LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="1" className={style.effectiveness}>
								<TypeIcon type={type} />
								<Effectiveness values={defender[type]} />
							</LayoutGrid.Cell>
						))}
					</LayoutGrid.Inner>
			<h3>Attack</h3>
					<LayoutGrid.Inner>
						{this.order.map(type => (
							<LayoutGrid.Cell desktopCols="4" tabletCols="4" phoneCols="1" className={style.effectiveness}>
								<TypeIcon type={type} />
								<Effectiveness values={attacker[type]} />
							</LayoutGrid.Cell>
						))}
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}

export default EffectivenessMatrix;
