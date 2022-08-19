import { RootState } from '..';

export const isAuthSelector = ({ auth }: RootState) => !!auth.data;

export const playersSelector = ({ players }: RootState) => players.data || [];

export const availablePlayersSelector = ({ players }: RootState) =>
  (players.data || []).filter(({ drafted }) => !drafted);

export const teamsSelector = ({ teams }: RootState) => teams.data || [];

export const featuredPlayerSelector = ({
  players,
  featuredPlayer,
}: RootState) => {
  if (featuredPlayer.playerId) {
    return (players.data || []).find(
      ({ id }) => id === featuredPlayer.playerId
    );
  }
  return null;
};

export const featuredTeamSelector = ({ teams, featuredTeam }: RootState) => {
  if (featuredTeam.teamId) {
    return (teams.data || []).find(({ id }) => id === featuredTeam.teamId);
  }
  return null;
};

export const filteredPlayersSelector = ({ players, searchTerm }: RootState) =>
  searchTerm.length < 3
    ? players.data || []
    : (players.data || []).filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );

export const searchTermSelector = ({ searchTerm }: RootState) => searchTerm;

export const moneyRemainingSelector = ({ teams }: RootState) =>
  (teams.data || []).reduce((acc, { money }) => acc + money, 0);

export const valueRemainingSelector = ({ players }: RootState) =>
  (players.data || []).reduce(
    (acc, { value, drafted }) => (drafted ? acc : acc + value),
    0
  );
