import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Container,
  SocialNetwork,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from './styles';

const SectionTwo: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>
          <strong>TONELINE</strong> LOCADORA DE VEÍCULOS
        </h1>
        <section>
          <Link to="/termsofuse">Termos de uso</Link>
          <Link to="/privacypolicy">Política de Privacidade</Link>
        </section>
      </header>
      <SocialNetwork>
        <article>
          <h1>
            <strong>Endereço</strong>
          </h1>
          <span>Quadra 103 Norte Rua de Pedestre NO 2, 189</span>

          <span>Plano Diretor Norte</span>
          <span>CEP: 77000-001</span>
          <span>Palmas-TO</span>

          <h2>Aluguel de Carros</h2>
        </article>
        <section>
          <Twitter>
            <Link
              to={{
                pathname:
                  'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
              }}
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </Twitter>

          <Facebook>
            <Link
              to={{
                pathname:
                  'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
              }}
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </Facebook>

          <Instagram>
            <Link
              to={{
                pathname:
                  'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
              }}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </Instagram>

          <YouTube>
            <Link
              to={{
                pathname:
                  'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
              }}
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </YouTube>
        </section>
      </SocialNetwork>

      <footer>
        <span>
          © Copyright 2021 <strong>Toneline</strong> - Todos os direitos
          resevados
        </span>
      </footer>
    </Container>
  );
};

export default SectionTwo;
