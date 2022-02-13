import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border: 0;
    border-radius: 2.5rem;
    height: 5rem;
    background: #FFF;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.placeholderInput};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;

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

export const ListContainer = styled.div`
  margin-top: 2.4rem;

  header {
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
        max-height: 1.55rem;
      }
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
