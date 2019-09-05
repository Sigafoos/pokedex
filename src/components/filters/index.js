import { h, Component } from 'preact';
import FormField from 'preact-material-components/FormField';
import { TextField, Input, HelperText } from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

class Filters extends Component {
	render() {
		return (
			<div id="filters">
				<form>
					<TextField
						label="filter"
			fullwidth
						helperText={<HelperText>Help Me!</HelperText>}
					>
							<Input
								id="query"
								value={this.state.value}
							/>
			        </TextField>
				</form>
			</div>
		);
	}
}

export default Filters;
