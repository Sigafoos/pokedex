import { h } from 'preact';
import TypeIcon from '../typeicon';
import titleCase from '../../utilities/titlecase';

const QuickMove = ({ move }) => {
	let displayName = format(move.uniqueId),
		power = move.power,
		energy = move.energyDelta,
		turns = 1;
	if (move.hasOwnProperty('durationTurns')) {
		turns = Number(move.durationTurns)+1;
	}

	return (
		<div>
			<TypeIcon type={move.type} />
			{displayName}: {power} / {energy} / {turns} / {Math.round(power/turns*100)/100} / {Math.round(energy/turns*100)/100}
		</div>
	);
}

const ChargeMove = ({ move }) => {
	let displayName = format(move.uniqueId),
	power = move.power,
	energy = Math.abs(move.energyDelta);

	return (
		<div>
		<TypeIcon type={move.type} />
		{displayName}: {power} / {energy} / {Math.round(power/energy*100)/100}
		</div>
	);
}

const format = move => {
	if (move.endsWith('_FAST')) {
		move = move.substr(0, move.length-5);
	}
	move = move.replace('_', ' ');
	return titleCase(move);
}

export { QuickMove, ChargeMove };
