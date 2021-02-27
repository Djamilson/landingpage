import React from 'react';
import { Container, ChallengeBoxInit } from './styles';

const ChallengeBox: React.FC = () => {
  return (
    <Container>
      <ChallengeBoxInit>
        <strong> Desconto de 70%</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          no boleto 80% off
        </p>
      </ChallengeBoxInit>
    </Container>
  );
};

export default ChallengeBox;
