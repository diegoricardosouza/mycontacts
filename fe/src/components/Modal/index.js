import Button from '../Button';

import * as S from './styles';

export default function Modal() {
  return (
    <S.Overlay>
      <S.Container>
        <S.Title>Título da Modal</S.Title>
        <S.Description>Corpo Modal</S.Description>

        <S.Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button">Deletar</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  );
}
