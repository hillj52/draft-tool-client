import { useEffect } from 'react';
import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Position } from '../../../models/position';
import { filteredPlayersSelector } from '../../../store/selectors';
import PlayerList from '../player-list/player-list';
import PlayerSearchBar from '../player-search-bar/player-search-bar';

const AvailablePlayers: React.FC = () => {
  const players = useTypedSelector(filteredPlayersSelector);

  const { fetchPlayers } = useActions();

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <>
      <PlayerSearchBar />
      {Object.keys(Position).map((position) => (
        <PlayerList
          key={position}
          position={position}
          players={players.filter(
            (player) => player.position === position && !player.drafted
          )}
        />
      ))}
    </>
  );
};

export default AvailablePlayers;
