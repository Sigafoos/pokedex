import { h, Component } from 'preact';
import style from './style';
import FormField from 'preact-material-components/FormField';
import { TextField, Input, HelperText } from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

class Filters extends Component {
	render({ filterPokemon }) {
		return (
			<div id="filters" class={style.filters}>
				<h2>Filter</h2>
				<form>
					<TextField
						fullwidth
						helperTextPersistent
						aria-label="filters"
						helperText="fire,electric,grass,bug,water&-251&!alola"
						onInput={e => filterPokemon(e.target.value)}
					/>
				</form>
			</div>
		);
	}
}

export default Filters;
