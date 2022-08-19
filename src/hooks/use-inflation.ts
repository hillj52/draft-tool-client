import {
  moneyRemainingSelector,
  valueRemainingSelector,
} from '../store/selectors';
import { useTypedSelector } from './useTypedSelector';

export const useInflation = () => {
  const moneyRemaining = useTypedSelector(moneyRemainingSelector);
  const valueRemaining = useTypedSelector(valueRemainingSelector);
  const inflation = moneyRemaining / valueRemaining;
  return { inflation, moneyRemaining, valueRemaining };
};
