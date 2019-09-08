import { h } from 'preact';
import style from './style';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

const Stats = ({ stats }) => (
	<div class={style.stats}>
	<h3>Base stats</h3>
	<List dense twoline>
		<List.Item>
			<List.TextContainer>
				<List.PrimaryText>{stats.baseAttack}</List.PrimaryText>
				<List.SecondaryText>Attack</List.SecondaryText>
			</List.TextContainer>
		</List.Item>
		<List.Item>
			<List.TextContainer>
				<List.PrimaryText>{stats.baseDefense}</List.PrimaryText>
				<List.SecondaryText>Defense</List.SecondaryText>
			</List.TextContainer>
		</List.Item>
		<List.Item>
			<List.TextContainer>
				<List.PrimaryText>{stats.baseStamina}</List.PrimaryText>
				<List.SecondaryText>Stamina</List.SecondaryText>
			</List.TextContainer>
		</List.Item>
	</List>
	</div>
);

export default Stats;
