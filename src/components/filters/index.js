import { h, Component } from 'preact';
import FormField from 'preact-material-components/FormField';
import { TextField, Input, HelperText } from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

class Filters extends Component {
	render({ filterPokemon }) {
		return (
			<div id="filters">
				<form>
					<TextField
						label="filter"
			fullwidth
						helperText={<HelperText>Help Me!</HelperText>}
						onInput={e => filterPokemon(e.target.value)}
					/>
				</form>
			</div>
		);
	}
}

export default Filters;
