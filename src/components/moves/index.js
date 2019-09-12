import { h, Fragment } from 'preact';
import style from './style';
import TypeIcon from '../typeicon';
import titleCase from '../../utilities/titlecase';
import Icon from 'preact-material-components/Icon';

const Move = ({ move, onSelect, selected, fastEnergy, quick, charge, legacy }) => {
	let displayName = format(move.uniqueId),
		power = move.power,
		energy = Math.abs(move.energyDelta),
		turns = 1;
	if (move.hasOwnProperty('durationTurns')) {
		turns = Number(move.durationTurns)+1;
	}
	let iconName = (selected) ? 'check_box' : 'check_box_outline_blank',
		turnsToCharge = fastEnergy && (<Fragment> ({Math.ceil(energy/fastEnergy)})</Fragment>),
		legacyText = (legacy) ? (<sup title="legacy">(L)</sup>) : undefined;

	let stats;
	if (quick) stats = (<Fragment>{displayName}{legacyText}: {power} / {energy} / {turns} / {Math.round(power/turns*100)/100} / {Math.round(energy/turns*100)/100}</Fragment>);
	if (charge) stats = (<Fragment>{displayName}{legacyText}: {power} / {energy} / {Math.round(power/energy*100)/100}{turnsToCharge}</Fragment>);

	let icon;
	if (onSelect) icon = (<Icon class={style.icon}>{iconName}</Icon>);

	return (
		<div onClick={() => onSelect && onSelect({ move, fast: quick })}>
			{icon}
			<TypeIcon type={move.type} />
			{stats}
		</div>
	);
}

const format = move => {
	if (move.endsWith('_FAST')) {
		move = move.substr(0, move.length-5);
	}
	move = move.replace(/_/g, ' ');
	return titleCase(move);
}

export default Move;
