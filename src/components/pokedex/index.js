import { h, Component } from 'preact';
import Filters from '../filters';
import PokemonList from '../pokemonlist';

const gmVersionURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/latest-version.txt';
const gmURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/%s/GAME_MASTER.json';

class Pokedex extends Component {
	componentDidMount() {
		fetch(gmVersionURL).then(data => data.text().then(v => this.checkForUpdate(v)));
	}

	checkForUpdate = version => {
		this.setState({ version: version });

		if (!localStorage.version || localStorage.version != version) {
			console.info('downloading new gamemaster.json...');
			fetch(gmURL.replace('%s', version)).then(data => data.json().then(j => this.updateGamemaster(j)));
		} else {
			this.loadGamemaster();
		}
	}

	updateGamemaster = gm => {
		let pokemon = {},
			moves = {},
			effectiveness = {},
			unknowns = [];

		for (let entry of gm.itemTemplates) {
			let tid = entry.templateId;
			let [type] = tid.split('_');

			switch (type) {
				case 'AVATAR':
				case 'BACKGROUND':
				case 'BADGE':
				case 'BATTLE':
				case 'BELUGA':
				case 'CHARACTER':
				case 'ENCOUNTER':
				case 'EX':
				case 'FORMS':
				case 'FRIENDSHIP':
				case 'GYM':
				case 'IAP':
				case 'ITEM':
				case 'LUCKY':
				case 'ONBOARDING':
				case 'PARTY':
				case 'PLAYER':
				case 'POKECOIN':
				case 'QUEST':
				case 'SMEARGLE':
				case 'SPAWN':
				case 'TRAINER':
				case 'WEATHER':
				case 'adventure':
				case 'bundle.general1.large.1':
				case 'bundle.general3.large.1':
				case 'camera':
				case 'incenseordinary.8':
				case 'sequence':
					break;
				case 'COMBAT':
					if (tid.startsWith('COMBAT_LEAGUE')) break;
					if (tid.startsWith('COMBAT_POKEMON_TYPE')) break;
					if (tid.startsWith('COMBAT_SETTINGS')) break;
					if (tid.startsWith('COMBAT_STAT_STAGE_SETTINGS')) break;

					let { combatMove } = entry;
					if (combatMove) {
						moves[combatMove.uniqueId] = combatMove;
					}
					break;
				case 'POKEMON':
					if (!tid.startsWith('POKEMON_TYPE')) break;
					let { typeEffective } = entry;
					if (typeEffective) {
						effectiveness[typeEffective.attackType] = typeEffective;
					}
					break;
				default:
					if (!tid.startsWith('V')) {
						unknowns.push(type);
						break;
					}
					let { pokemonSettings } = entry;
					if (pokemonSettings) {
						let name = pokemonSettings.pokemonId;
						pokemonSettings.alolan = false;
						if (tid.endsWith('ALOLA')) {
							name = tid.substr(14);
							pokemonSettings.alolan = true;
						}
						pokemonSettings.dexNumber = Number(type.substr(1));
						pokemon[name] = pokemonSettings;
					}
			}
		}

		if (unknowns.length != 0) {
			let set = [...new Set(unknowns)];
			console.error('there were errors!\n\nunknown types:\n' + set.join('\n'));
		}

		let parsedPokemon = JSON.stringify(pokemon);
		let parsedMoves = JSON.stringify(moves);
		let parsedEffectiveness = JSON.stringify(effectiveness);
		localStorage.setItem('pokemon', parsedPokemon);
		localStorage.setItem('moves', parsedMoves);
		localStorage.setItem('effectiveness', parsedEffectiveness);
		localStorage.setItem('version', this.state.version);

		this.setState({
			pokemon: parsedPokemon,
			moves: parsedMoves,
			effectiveness: parsedEffectiveness
		});
	}

	loadGamemaster = () => {
		this.setState({
			pokemon: JSON.parse(localStorage.getItem('pokemon')),
			moves: JSON.parse(localStorage.getItem('moves')),
			effectiveness: JSON.parse(localStorage.getItem('effectiveness'))
		});
	}

	render(_, { pokemon, moves }) {
		return (
			<div>
				<Filters />
				<PokemonList pokemon={pokemon} moves={moves} />
			</div>
		);
	}
}

export default Pokedex;
