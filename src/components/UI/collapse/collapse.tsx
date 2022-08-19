import { useState } from 'react';
import Button from '../button/button';

interface CollapseProps {
  buttonText: string;
}

const Collapse: React.FC<React.PropsWithChildren<CollapseProps>> = ({
  children,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button size="smaller" onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
      </Button>
      {isOpen ? children : null}
    </div>
  );
};

export default Collapse;
