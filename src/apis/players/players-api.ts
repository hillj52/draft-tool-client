import { Player } from '../../models/player';

export const PlayersAPI = {
  get: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/players`, {
        method: 'get',
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
      return data as Player[];
    } catch (error) {
      throw new Error('Generic Server Error');
    }
  },
};
