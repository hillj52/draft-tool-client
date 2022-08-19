import { ChangeEventHandler } from 'react';
import './input.module.css';

interface NumberInputProps {
  id: string;
  value: number;
  label: string;
  type: 'number';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
}

interface StringInputProps {
  id: string;
  value: string;
  label: string;
  type: 'text' | 'password';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
}

const Input: React.FC<StringInputProps | NumberInputProps> = ({ id, value, label, type, onChange, autoFocus }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} onChange={onChange} value={value} autoFocus={autoFocus} />
  </div>
);

 export default Input;