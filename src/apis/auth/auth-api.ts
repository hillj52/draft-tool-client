export const AuthAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        {
          method: 'post',
          body: JSON.stringify({ username: email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }
      const data = await response.json();
      return data.access_token as string;
    } catch (error) {
      console.log('error', error);
      throw new Error('Generic Server Error');
    }
  },
};
