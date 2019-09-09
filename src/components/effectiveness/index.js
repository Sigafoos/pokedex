import { h } from 'preact';

const Effectiveness = ({ values }) => {
	let average = 1;
	if (values.length) {
		let total = 0;
		for (let v of values) {
			total += v;
		}
		average = total / values.length;
		average = Math.round(average * 1000) / 1000;
	}
	return (
		<div>
			{average}
		</div>
	);
}

export default Effectiveness;
