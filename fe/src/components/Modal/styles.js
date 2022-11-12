import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: translateY(500px) scale(0); }
  to { transform: translateY(0) scale(1); }
`;

const scaleOut = keyframes`
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(500px) scale(0); }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${fadeOut} 0.2s;
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  background: #FFFFFF;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
  padding: 2.4rem;
  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${scaleOut} 0.2s;
  `}
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
`;

export const Children = styled.div`
  margin-top: 3.2rem;
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
    margin-right: 2.4rem;
    color: ${({ theme }) => theme.colors.gray[200]};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
