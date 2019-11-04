<template>
	<md-app>
		<md-app-toolbar class="md-primary">
			<span class="md-title">Pokedex</span>
		</md-app-toolbar>
		<md-app-content>
				<md-progress-spinner md-mode="indeterminate" v-if="loading" />
				<Pokemon v-for="p in pokemon" :key="p.id" :p="p" :moves="moves" />
		</md-app-content>
	</md-app>
</template>

<script>
	import Pokemon from './Pokemon.vue';
	const gmVersionURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/latest-version.txt';
	const gmURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/%s/GAME_MASTER.json';

	export default {
		name: 'Pokedex',

		components: {
			Pokemon
		},

		data: function() {
			return {
				pokemon: {},
				filtered: {},
				moves: {},
				effectiveness: {},
				loading: true,
				filter: "",
				selected: {},
				selectedMoved: [],
				version: ""
			}
		},

		created: function() {
			fetch(gmVersionURL).then(data => data.text().then(v => this.checkForUpdate(v)));
		},

		methods: {
			checkForUpdate: function(version) {
				this.version = version;

				if (!localStorage.version || localStorage.version != version) {
					console.info("downloading new gamemaster.json...");
					fetch(gmURL.replace('%s', version)).then(data => data.json().then(j => this.updateGamemaster(j)));
				} else {
					this.loadGamemaster();
				}
			},

			updateGamemaster: function(gm) {
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
						case 'INVASION':
						case 'LPSKU':
						case 'bundle.general1.tiny.2':
						case 'bundle.general1.tiny.3':
						case 'general1.ticket.1':
							break;
						case 'COMBAT': {
							if (tid.startsWith('COMBAT_LEAGUE')) break;
							if (tid.startsWith('COMBAT_POKEMON_TYPE')) break;
							if (tid.startsWith('COMBAT_SETTINGS')) break;
							if (tid.startsWith('COMBAT_STAT_STAGE_SETTINGS')) break;

							let { combatMove } = entry;
							if (combatMove) {
								moves[combatMove.uniqueId] = combatMove;
							}
							break;
						}
						case 'POKEMON': {
							if (!tid.startsWith('POKEMON_TYPE')) break;
							let { typeEffective } = entry;
							if (typeEffective) {
								effectiveness[typeEffective.attackType] = typeEffective;
							}
							break;
						}
						default: {
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
				localStorage.setItem('version', this.version);

				// TODO
				//pokemon = this.addLegacyMoves(pokemon);
				let filtered = pokemon;
				let selected = JSON.parse(localStorage.getItem('selected')) || {};
				for (let name in selected) {
					delete filtered[name];
				}

				this.pokemon = pokemon;
				this.filtered = pokemon;
				this.moves = moves;
				this.effectiveness = effectiveness;
				this.selected = selected;
				this.loading = false;
			},

			loadGamemaster: function() {
				let p = JSON.parse(localStorage.getItem('pokemon')),
					selected = JSON.parse(localStorage.getItem('selected')) || {};
				//p = this.addLegacyMoves(p);
				let filtered = p;

				for (let name in selected) {
					delete filtered[name];
				}

					this.pokemon = p;
					this.filtered = p;
					this.selected = selected;
					this.moves = JSON.parse(localStorage.getItem('moves'));
					this.effectiveness = JSON.parse(localStorage.getItem('effectiveness'));
					this.loading = false;
			}
		}
	}
</script>

