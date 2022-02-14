import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  background: #FFFFFF;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
  padding: 2.4rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 0.8rem;
`;

export const Footer = styled.footer`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    border: none;
    font-size: 1.6rem;
    background: transparent;
    padding: 0 0.8rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
