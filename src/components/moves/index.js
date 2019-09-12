import { h } from 'preact';
import style from './style';
import TypeIcon from '../typeicon';
import titleCase from '../../utilities/titlecase';
import Icon from 'preact-material-components/Icon';

const QuickMove = ({ move, onSelect, selected, legacy }) => {
	let displayName = format(move.uniqueId),
		power = move.power,
		energy = move.energyDelta,
		turns = 1;
	if (move.hasOwnProperty('durationTurns')) {
		turns = Number(move.durationTurns)+1;
	}
	let iconName = (selected) ? 'check_box' : 'check_box_outline_blank',
		legacyText = (legacy) ? ' (L)' : undefined;

	return (
		<div onClick={() => onSelect({ move, fast: true })}>
			<Icon class={style.icon}>{iconName}</Icon>
			<TypeIcon type={move.type} />
			{displayName}{legacyText}: {power} / {energy} / {turns} / {Math.round(power/turns*100)/100} / {Math.round(energy/turns*100)/100}
		</div>
	);
}

const ChargeMove = ({ move, onSelect, selected, fastEnergy, legacy }) => {
	let displayName = format(move.uniqueId),
	power = move.power,
	energy = Math.abs(move.energyDelta);
	let iconName = (selected) ? 'check_box' : 'check_box_outline_blank',
		turns = fastEnergy && (" (" + Math.ceil(energy/fastEnergy) + ")"),
		legacyText = (legacy) ? (<sup title="legacy">(L)</sup>) : undefined;

	return (
		<div onClick={() => onSelect({ move })}>
			<Icon class={style.icon}>{iconName}</Icon>
			<TypeIcon type={move.type} />
			{displayName}{legacyText}: {power} / {energy} / {Math.round(power/energy*100)/100}
			{turns}
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
