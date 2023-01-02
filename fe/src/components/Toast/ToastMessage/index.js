import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as S from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  // const animatedElementRef = useRef(null);

  // useEffect(() => {
  //   function handleAnimationEnd() {
  //     onAnimationEnd(message.id);
  //   }

  //   const elementRef = animatedElementRef.current;
  //   if (isLeaving) {
  //     elementRef.addEventListener('animationend', handleAnimationEnd);
  //   }

  //   return () => {
  //     elementRef.removeEventListener('animationend', handleAnimationEnd);
  //   };
  // }, [isLeaving, message.id, onAnimationEnd]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [message, onRemoveMessage]);

  const handleRemoveToast = () => {
    onRemoveMessage(message.id);
  };

  return (
    <S.Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="x" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{message.text}</strong>
    </S.Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};
