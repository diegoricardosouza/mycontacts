import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from '../Button';

import * as S from './styles';

export default function Modal({
  danger, title, children, cancelLabel, confirmLabel, onCancel, onConfirm,
}) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container>
        <S.Title danger={danger}>{title}</S.Title>

        <S.Children>{children}</S.Children>

        <S.Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
