import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  padding: 1.6rem 3.2rem;
  color: #FFF;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 1.2rem;
  }

  img {
    margin-right: 0.8rem;
  }
`;
