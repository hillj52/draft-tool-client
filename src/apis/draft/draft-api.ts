import { Player } from '../../models/player';
import { RosterPosition } from '../../models/roster-position';
import { Team } from '../../models/team';

interface DraftPlayerResponse {
  team: Team;
  player: Player;
}

export const DraftAPI = {
  draftPlayer: async (
    playerId: string,
    teamId: string,
    price: number,
    position: RosterPosition
  ) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/draft`, {
        method: 'post',
        body: JSON.stringify({
          playerId,
          teamId,
          price,
          position,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }
      const data = await response.json();
      console.log(data);
      return data as DraftPlayerResponse;
    } catch (error) {
      throw new Error('Generic Server Error');
    }
  },

  undraftPlayer: async (
    playerId: string,
    teamId: string,
    position: RosterPosition
  ) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/draft/undraft`,
        {
          method: 'post',
          body: JSON.stringify({
            playerId,
            teamId,
            position,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }
      const data = await response.json();
      console.log(data);
      return data as DraftPlayerResponse;
    } catch (error) {
      throw new Error('Generic Server Error');
    }
  },
};
