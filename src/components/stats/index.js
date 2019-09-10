import { h } from 'preact';
import style from './style';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

const Stats = ({ stats }) => (
	<div class="stats">
	<LayoutGrid>
		<LayoutGrid.Inner>
			<LayoutGrid.Cell className={style.stat} desktopCols="4" phoneCols="1">
				<div>{stats.baseAttack}</div>
				<Typography caption>attack</Typography>
			</LayoutGrid.Cell>
			<LayoutGrid.Cell className={style.stat} desktopCols="4" phoneCols="1">
				<div>{stats.baseDefense}</div>
				<Typography caption>defense</Typography>
			</LayoutGrid.Cell>
			<LayoutGrid.Cell className={style.stat} desktopCols="4" phoneCols="1">
				<div>{stats.baseStamina}</div>
				<Typography caption>stamina</Typography>
			</LayoutGrid.Cell>
		</LayoutGrid.Inner>
	</LayoutGrid>
	</div>
);

export default Stats;
