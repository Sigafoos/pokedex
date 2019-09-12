import { h, Component } from 'preact';
import legacy from '../../data/legacy';
import Filters from '../filters';
import PokemonList from '../pokemonlist';
import EffectivenessMatrix from '../effectivenessmatrix';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import { Circular } from 'styled-loaders'

const gmVersionURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/latest-version.txt';
const gmURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/%s/GAME_MASTER.json';

class Pokedex extends Component {
	state = {
		loading: true,
		filter: "",
		selected: {},
		selectedMoves: []
	}

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
						pokemonSettings.types = [pokemonSettings.type];
						if (pokemonSettings.hasOwnProperty('type2')) {
							pokemonSettings.types.push(pokemonSettings.type2);
						}
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

		pokemon = this.addLegacyMoves(pokemon);
		let filtered = pokemon;
		let selected = JSON.parse(localStorage.getItem('selected')) || {};
		for (let name in selected) {
			delete filtered[name];
		}

		this.setState({
			pokemon: pokemon,
			filtered: pokemon,
			moves: moves,
			effectiveness: effectiveness,
			selected: selected,
			loading: false
		});
	}

	loadGamemaster = () => {
		let p = JSON.parse(localStorage.getItem('pokemon')),
			selected = JSON.parse(localStorage.getItem('selected')) || {};
		p = this.addLegacyMoves(p);
		let filtered = p;

		for (let name in selected) {
			delete filtered[name];
		}

		this.setState({
			pokemon: p,
			filtered: p,
			selected: selected,
			moves: JSON.parse(localStorage.getItem('moves')),
			effectiveness: JSON.parse(localStorage.getItem('effectiveness')),
			loading: false
		});
	}

	addLegacyMoves = pokemon => {
		for (name in legacy) {
			pokemon[name].legacyMoves = legacy[name];
			let { quick, charge } = legacy[name];
			if (quick) {
				pokemon[name].quickMoves = pokemon[name].quickMoves.concat(quick);
			}
			if (charge) {
				pokemon[name].cinematicMoves = pokemon[name].cinematicMoves.concat(charge);
			}
		}
		return pokemon;
	}

	idRegexp = /^(\d*)(-?)(\d*)$/;

	filterPokemon = text => {
		this.setState({ filter: text });
		this.calculateFiltered();
	}

	calculateFiltered = () => {
		let filtered = {};

		/*
		 * For each Pokemon, split a,b&c into a,b and c (two conditions)
		 * For each condition, if any clause (ie a and b) are true, pass
		 * and break.
		 * If any condition fails, the Pokemon is filtered out. Otherwise,
		 * it passes.
		 */
		pokemonLoop:
		for (let name in this.state.pokemon) {
			let pokemon = this.state.pokemon[name],
				conditions = this.state.filter.split('&');

			for (let condition of conditions) {
				let clauses = condition.split(','),
					passed = false;

				clauseLoop:
				for (let clause of clauses) {
					let not = false;

					if (clause.charAt(0) == '!') {
						not = true;
						clause = clause.substr(1);
					}

					// -151, 252-, etc
					let dexMatches = this.idRegexp.exec(clause);
					if (dexMatches && dexMatches[0] != "") {
						let start = -1,
							end = -1;

						if (dexMatches[1] != "") {
							start = Number(dexMatches[1]);
						}
						if (dexMatches[3] != "") {
							end = Number(dexMatches[3]);
						}

						if (dexMatches[2] == "-") {
							if (start == -1) {
								start = 1;
							}
							if (end == -1) {
								end = 9999;
							}
						}

						// looking for a specific entry
						if (dexMatches[2] == "") {
							if (start == pokemon.dexNumber) {
								if (not) {
									continue;
								}
								passed = true;
								break;
							}

							// if it didn't match but is a not, it's right!
							if (not) {
								passed = true;
								break;
							}
							continue;
						}

						if (start != -1) {
							if (pokemon.dexNumber < start && !not) {
								continue;
							}
							if (pokemon.dexNumber > start && not) {
								continue;
							}
						}

						if (end != -1) {
							if (pokemon.dexNumber > end && !not) {
								continue;
							}
							if (pokemon.dexNumber < end && not) {
								continue;
							}
						}

						passed = true;
						break;
					}

					clause = clause.toUpperCase();

					if (clause == 'ALOLA') {
						if (not) {
							if (pokemon.alolan) {
								continue;
							}
							passed = true;
							break;
						}

						if (pokemon.alolan) {
							passed = true;
							break;
						}
						continue;
					}

					// TODO: flying&!fire correctly excludes zard
					//       fire&!flying does not
					for (let type of pokemon.types) {
						let parsedType = 'POKEMON_TYPE_' + clause;
						if (type == parsedType) {
							if (not) {
								continue clauseLoop;
							}
							passed = true;
							break clauseLoop;
						} else if (not && this.state.effectiveness.hasOwnProperty(parsedType)) {
							passed = true;
							break clauseLoop;
						}
					}

					// search by name (doesn't handle not)
					if (pokemon.pokemonId.indexOf(clause) != -1) {
						passed = true;
						break;
					}
				}
				if (!passed) {
					continue pokemonLoop;
				}
			}
			filtered[name] = pokemon;
		}
		this.setState({ filtered });
	}

	hoist = (id) => {
		let { selected, filtered, pokemon } = this.state;
		selected[id] = pokemon[id];
		delete filtered[id];
		localStorage.setItem('selected', JSON.stringify(selected));
		this.setState({ selected, filtered });
	}

	unhoist = (id) => {
		let { selected } = this.state;
		delete selected[id];
		localStorage.setItem('selected', JSON.stringify(selected));
		this.setState({ selected });
		this.calculateFiltered();
	}

	moveSelected = move => {
		let { selectedMoves } = this.state;
		selectedMoves.push(move);
		this.setState({ selectedMoves });
	}

	moveUnselected = move => {
		let { selectedMoves } = this.state;
		let i = selectedMoves.indexOf(move);
		if (i === -1) {
			console.error("can't remove " + move + " from selected list; it isn't present");
			return;
		}
		selectedMoves.splice(i, 1);
		this.setState({ selectedMoves });
	}

	render(_, { moves, effectiveness, filtered, selected, loading, selectedMoves }) {
		return (
			<div>
				<LayoutGrid>
					<LayoutGrid.Inner>
						<LayoutGrid.Cell desktopCols="3" tabletCols="2" phoneCols="4">
							<EffectivenessMatrix pokemon={selected} effectiveness={effectiveness} selectedMoves={selectedMoves.map(move => moves[move])} />
						</LayoutGrid.Cell>

						<LayoutGrid.Cell desktopCols="9" tabletCols="6" phoneCols="4">
							{Object.keys(selected).length > 0 && (<PokemonList pokemon={selected} moves={moves} onChoose={this.unhoist} chooseIcon="remove_circle" onMoveSelect={this.moveSelected} onMoveUnselect={this.moveUnselected}  />)}
							<Filters filterPokemon={this.filterPokemon} />
							{loading && (<Circular />)
								|| (<PokemonList pokemon={filtered} moves={moves} onChoose={this.hoist} chooseIcon="add_circle" />)}
						</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}

export default Pokedex;
