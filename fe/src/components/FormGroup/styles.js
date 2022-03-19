import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 1.2rem;
    display: block;
    margin-top: 0.8rem;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 1.8rem;
      right: 1.6rem;
    }
  }
`;
