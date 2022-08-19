import { createPortal } from 'react-dom';
import classes from './modal.module.css';

interface ModalProps {
  onClose: () => void;
}

const modalElement = document.getElementById('modal-root');
const portalElement = document.getElementById('overlays');

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
}) => (
  <>
    {createPortal(
      <div className={classes.backdrop} onClick={onClose}></div>,
      portalElement!
    )}
    {createPortal(
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>,
      modalElement!
    )}
  </>
);

export default Modal;
