import React from 'react';

import { useCountDownsData } from '../../hooks/countDownContext';
import { Container } from './styles';

const CountDown: React.FC = () => {
  const { minutes, seconds } = useCountDownsData();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <strong>:</strong>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </Container>
  );
};

export default CountDown;
