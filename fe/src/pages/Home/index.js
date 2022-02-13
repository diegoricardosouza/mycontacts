import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Diego Ricardo</strong>
              <small>instagram</small>
            </div>
            <span>diego@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Diego Ricardo</strong>
              <small>instagram</small>
            </div>
            <span>diego@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Diego Ricardo</strong>
              <small>instagram</small>
            </div>
            <span>diego@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
