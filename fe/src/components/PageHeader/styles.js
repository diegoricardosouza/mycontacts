import styled from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    text-decoration: none;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
    }

    img {
      margin-right: 0.8rem;
      transform: rotate(-90deg);
      height: 2.1rem;
    }
  }
`;

export const Title = styled.h1`
  margin: 0.8rem 0 0 0;
  font-size: 2.4rem;
  font-weight: 700;
`;
