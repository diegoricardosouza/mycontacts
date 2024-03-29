import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 0 1.6rem;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
  height: 5.2rem;
  font-size: 1.6rem;
  outline: none;
  padding: 0 1.6rem;
  color: #FFF;
  font-weight: 700;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC !important;
    cursor: not-allowed !important;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
