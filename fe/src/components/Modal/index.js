import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from '../Button';

import * as S from './styles';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container>
        <S.Title danger={danger}>Título da Modal</S.Title>
        <S.Description>Corpo Modal</S.Description>

        <S.Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
