import React from 'react';

import ChallengeBox from '../ChallengeBox';
import CompletedChallenges from '../CompletedChallenges';
import CountDown from '../CountDown';
import DescritionProduct from '../DescritionProduct';
import DescritionPromotion from '../DescritionPromotion';
import Footer from '../Footer';
import Form from '../Form';
import ImageTop from '../ImageTop';
import ScrollIndicator from '../ScrollIndicator';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollIndicator />

      <ImageTop />

      <section>
        <article>
          <DescritionPromotion />
          <CompletedChallenges />
          <CountDown />
        </article>
        <section>
          <ChallengeBox />
        </section>
      </section>

      <Form />

      <DescritionProduct />
      <Footer />
    </Container>
  );
};

export default Home;
