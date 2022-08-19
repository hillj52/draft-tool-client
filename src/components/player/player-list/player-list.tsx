import Header from '../../UI/header/header';
import { Player } from '../../../models/player';
import PlayerCard from '../player-card/player-card';
import classes from './player-list.module.css';

interface PlayerListProps {
  players: Player[];
  position: string;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, position }) => (
  <section className={classes['player-list']}>
    <Header text={position} />
    <div className={classes.players}>
      {players
        .sort((p1, p2) => p2.value - p1.value)
        .map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
    </div>
  </section>
);

export default PlayerList;
