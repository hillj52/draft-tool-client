import { useState, FormEvent } from 'react';
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';
import classes from './add-team-form.module.css';

interface AddTeamFormData {
  teamName: string;
  teamOwner: string;
}

interface AddTeamFormProps {
  onSubmit: (data: AddTeamFormData) => void;
  onCancel: () => void;
}

const AddTeamForm: React.FC<AddTeamFormProps> = ({ onSubmit, onCancel }) => {

  const [teamName, setTeamName] = useState('');
  const [teamOwner, setTeamOwner] = useState('');

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ teamName, teamOwner });
  }

  return (
    <section className={classes.form}>
      <form onSubmit={submitHandler}>
        <Input 
          id='team-name' 
          label='Team Name' 
          type='text' 
          value={teamName} 
          onChange={(e) => setTeamName(e.target.value)} 
        />
        <Input 
          id='team-owner' 
          label='Team Owner' 
          type='text' 
          value={teamOwner} 
          onChange={(e) => setTeamOwner(e.target.value)} 
        />
        <div className={classes['form-control']}>
          <Button primary>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    </section>
  );
}

export default AddTeamForm;