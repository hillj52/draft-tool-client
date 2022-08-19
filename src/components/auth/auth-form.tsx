import { FormEvent, useState } from 'react';
import { useActions } from '../../hooks/use-actions';

import Button from '../UI/button/button';
import Input from '../UI/input/input';
import classes from './auth-form.module.css';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Loggin in!');
    login(email, password);
  };

  return (
    <form className={classes.auth} onSubmit={submitHandler}>
      <Input
        id="email"
        type="text"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button primary>Login</Button>
    </form>
  );
};

export default AuthForm;
