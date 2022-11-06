/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

import * as S from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <S.Container>
      <img src={magnifierQuestion} alt="Magnifier Question" />

      <span>
        Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.
      </span>
    </S.Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
