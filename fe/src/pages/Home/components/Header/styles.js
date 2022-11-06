import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 3.2rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 1.6rem;

  strong {
    font-size: 2.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: 700;
    border: 0.2rem solid ${({ theme }) => theme.colors.primary.main};
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;
