import React from 'react';

import { Overlay, Container } from './styles';

const LevelUpModal: React.FC = () => {
  return (
    <Overlay>
      <Container>
        <header>
          <span>jhjhkhkj</span>
        </header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={() => {}}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
