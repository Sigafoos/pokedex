<template>
	<md-table-row>
		<md-table-cell>{{ name }} <Type :type="move.type" /></md-table-cell>
		<md-table-cell v-if="fast">{{ dpt }}</md-table-cell>
		<md-table-cell v-if="fast">{{ ept }}</md-table-cell>
		<md-table-cell v-if="charge">{{ move.power }}</md-table-cell>
		<md-table-cell v-if="charge">{{ energy }}</md-table-cell>
		<md-table-cell v-if="charge">{{ dpe }}</md-table-cell>
	</md-table-row>
</template>

<script>
import Type from './Type.vue';
import titleCase from '../utilities/titlecase';

export default {
	name: 'Move',

	props: {
		move: Object,
		fast: Boolean,
		charge: Boolean
	},

	components: {
		Type
	},

	computed: {
		name: function() {
			let m = this.move.uniqueId;
			if (m.endsWith('_FAST')) m = m.substr(0, m.length-5);
			return titleCase(m.replace(/_/g, ' '));
		},

		turns: function() {
			return this.move.durationTurns ? Number(this.move.durationTurns)+1 : 1;
		},

		energy: function() {
			return Math.abs(this.move.energyDelta);
		},

		dpt: function() {
			return Math.round(this.move.power/this.turns*100)/100;
		},

		ept: function() {
			return Math.round(this.energy/this.turns*100)/100;
		},

		dpe: function() {
			return Math.round(this.move.power/this.energy*100)/100;
		}

	}
}
</script>

<style scoped>
	.md-table-cell-container {
		padding: 6px;
	}
</style>
