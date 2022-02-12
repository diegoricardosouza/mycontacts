import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 7.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 20.1rem;
  }
`;

export const InputSearchContainer = styled.div`
  margin-top: 4.8rem;
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
