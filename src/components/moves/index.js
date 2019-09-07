import { h } from 'preact';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

const QuickMove = ({ move, list }) => (
	<p>{move}</p>
);

const ChargeMove = ({ move, list }) => (
	<p>{move}</p>
);

export { QuickMove, ChargeMove };
