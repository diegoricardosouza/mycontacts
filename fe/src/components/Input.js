import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: 0.2rem solid #FFF;
  background: #FFF;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
  height: 5.2rem;
  font-size: 1.6rem;
  outline: none;
  padding: 0 1.6rem;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
