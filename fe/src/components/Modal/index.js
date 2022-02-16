import PropTypes from 'prop-types';

import Button from '../Button';

import * as S from './styles';

export default function Modal({ danger }) {
  return (
    <S.Overlay>
      <S.Container>
        <S.Title danger={danger}>Título da Modal</S.Title>
        <S.Description>Corpo Modal</S.Description>

        <S.Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
