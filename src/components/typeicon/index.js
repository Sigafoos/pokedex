import { h } from 'preact';
import style from './style';

const TypeIcon = ({ type }) => {
	if (!type) return;

	let name = type.substr(13);
	return (<span className={style.type + ' ' + style[type]}>{name}</span>);
}

export default TypeIcon;
