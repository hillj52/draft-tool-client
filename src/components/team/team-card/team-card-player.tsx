import { Player } from '../../../models/player';
import classes from './team-card-player.module.css';

interface TeamCardProps {
  player?: Player;
  position: string;
}

const TeamCardPlayer: React.FC<TeamCardProps> = ({ player, position }) => (
  <div>
    <div>
      <span className={classes.position}>{position}: </span>
      <span className={classes.name}>{player ? player.name : ''}</span>
      {player && position === 'Bench' ? (
        <span> - {player.position}</span>
      ) : null}
    </div>
    <div>
      <span className={classes.team}>{player ? player.team : ''}</span>
      <span className={classes['bye-week']}>
        {player ? player.byeWeek : ''}
      </span>
      <span className={classes.price}>
        {player ? `$${player.value} - ($${player.price})` : ''}
      </span>
    </div>
  </div>
);

export default TeamCardPlayer;
