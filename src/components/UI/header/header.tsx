import Card from "../card/card";
import classes from './header.module.css';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({ text, className }) => (
  <Card className={`${className} ${classes.header}`}>
    <span className={classes.text}>{text}</span>
  </Card>
);

export default Header;