import { ChangeEventHandler } from 'react';
import classes from './dropdown.module.css';

interface DropdownProps {
  label: string;
  name: string;
  id: string;
  values: {
    displayText: string;
    id: string;
  }[];
  defaultText: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, id, defaultText, values, onChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select className={classes.select} name={name} id={id} onChange={onChange}>
      <option value='-'>{defaultText}</option>
      {values.map(({ displayText, id }) => (
        <option value={id} key={id}>{displayText}</option>
      ))}
    </select>
  </>
);

export default Dropdown;