<template>
	<md-table-row>
		<md-table-cell>{{ name }}</md-table-cell>
		<md-table-cell><Type :type="move.type" /></md-table-cell>
		<md-table-cell>{{ move.power / (Number(move.durationTurns) + 1) }}</md-table-cell>
		<md-table-cell>{{ move.energyDelta / (Number(move.durationTurns) + 1) }}</md-table-cell>
	</md-table-row>
</template>

<script>
import Type from './Type.vue';
import titleCase from '../utilities/titlecase';

export default {
	name: 'Move',

	props: ['move'],

	components: {
		Type
	},

	computed: {
		name: function() {
			let m = this.move.uniqueId;
			if (m.endsWith('_FAST')) m = m.substr(0, m.length-5);
			return titleCase(m.replace(/_/g, ' '));
		}
	}
}
</script>

<style scoped>
	.md-table-cell-container {
		padding: 6px;
	}
</style>
