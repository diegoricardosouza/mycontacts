import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';
import * as S from './styles';

export default function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="Voltar Para a Home" />
        <span>voltar</span>
      </Link>

      <S.Title>{ title }</S.Title>
    </S.Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
