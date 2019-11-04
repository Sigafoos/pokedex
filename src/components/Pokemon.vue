<template>
	<md-card>
		<md-card-header>
			<div class="md-title">{{ name }}</div>
			<Type v-for="type in types" :key="type" :type="type" />
		</md-card-header>

		<md-card-content>
			<div class="md-layout">
				<div class="md-layout-item md-size-33">
					<div class="stat">{{ p.stats.baseAttack }}</div>
					<div class="md-caption">Attack</div>
				</div>
				<div class="md-layout-item md-size-33">
					<div class="stat">{{ p.stats.baseDefense }}</div>
					<div class="md-caption">Defense</div>
				</div>
				<div class="md-layout-item md-size-33">
					<div class="stat">{{ p.stats.baseStamina }}</div>
					<div class="md-caption">Stamina</div>
				</div>
			</div>

			<md-subheader>Quick</md-subheader>
			<md-table>
				<md-table-row>
					<md-table-head>move</md-table-head>
					<md-table-head>DPT</md-table-head>
					<md-table-head>EPT</md-table-head>
				</md-table-row>

				<Move v-for="move of fastMoves" :key="p.pokemonId + move.uniqueId" :move="move" fast />
			</md-table>

			<md-subheader>Charge</md-subheader>
			<md-table>
			<md-table-row>
			<md-table-head>move</md-table-head>
			<md-table-head>damage</md-table-head>
			<md-table-head>energy</md-table-head>
			<md-table-head>DPE</md-table-head>
			</md-table-row>

			<Move v-for="move of chargeMoves" :key="p.pokemonId + move.uniqueId" :move="move" charge />
			</md-table>

		</md-card-content>

		<md-card-actions>
			<md-button>Add</md-button>
		</md-card-actions>
	</md-card>
</template>

<script>
	import Type from './Type.vue';
	import Move from './Move.vue';
	import titleCase from '../utilities/titlecase';

	export default {
		name: 'Pokemon',

		// passing every move in the game to each pokemon sucks. do better.
		props: ['p', 'moves'],

		components: {
			Type,
			Move
		},

		created: function() { if (this.p.dexNumber == 1) console.log(this.p) },
		computed: {
			id: function() {
				let id = this.p.pokemonId;
				if (this.p.alolan) id += "_ALOLAN";
				return id;
			},

			name: function() {
				let computed = titleCase(this.p.pokemonId);
				if (this.p.alolan) computed += " (Alolan)";
				return computed;
			},

			types: function() {
				let t = [this.p.type];
				if (this.p.type2) t.push(this.p.type2);
				return t;
			},

			// quickMoves is raw, fastMoves is parsed. that's dumb.
			fastMoves: function() {
				if (!this.p.quickMoves) return [];

				let moves = [];
				for (let move of this.p.quickMoves) {
					moves.push(this.moves[move]);
				}
				return moves;
			},

			chargeMoves: function() {
				if (!this.p.cinematicMoves) return [];

				let moves = [];
				for (let move of this.p.cinematicMoves) {
					moves.push(this.moves[move]);
				}
				return moves;
			}
		}
	}
</script>

<style type="scss" scoped>
	.md-card {
		width: 400px;
		margin: 4px;
		display: inline-block;
		vertical-align: top;
	}

	.stat {
		font-size: 2em;
	}

	.md-layout-item {
		text-align: center;
	}
</style>
