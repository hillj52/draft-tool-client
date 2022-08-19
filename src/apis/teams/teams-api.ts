import { Team } from '../../models/team';

export const TeamsAPI = {
  create: async (owner: string, name: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/teams/createTeam`,
        {
          method: 'post',
          body: JSON.stringify({ owner, name }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }
      const data = await response.json();
      return data as Team;
    } catch (error) {
      throw new Error('Generic Server Error');
    }
  },
  get: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/teams`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }
      const data = await response.json();
      return data as Team[];
    } catch (error) {
      throw new Error('Generic Server Error');
    }
  },
};
