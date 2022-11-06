import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 0.8rem;
      font-weight: 700;
    }

    img {
      width: 1.5rem;
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1.6rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2rem;
        padding: 0.4rem;
        border-radius: 0.4rem;
        margin-left: 0.8rem;
      }
    }

    span {
      display: block;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-top: 0.4rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 0.8rem;

      img {
        height: 2.2rem;
      }
    }

    a {
      display: flex;

      img {
        height: 2.01rem;
      }
    }
  }
`;
