import { ChangeEventHandler } from 'react';
import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { searchTermSelector } from '../../../store/selectors';
import Input from '../../UI/input/input';
import classes from './player-search-bar.module.css';

const PlayerSearchBar: React.FC = () => {
  const { updateSearchTerm } = useActions();

  const searchTerm = useTypedSelector(searchTermSelector);

  const nameChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <section className={classes.center}>
      <Input
        id="search"
        label="Search"
        value={searchTerm}
        type="text"
        onChange={nameChangeHandler}
      />
    </section>
  );
};

export default PlayerSearchBar;
