import styled from 'styled-components';
import { colors } from '../../styles';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: ${colors.colorTitleInPrimary};
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
  padding: 4.5rem 2rem;

  text-align: center;
  position: relative;

  header {
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
    margin-bottom: 2rem;
    span {
      font-size: 4.75rem;
      font-weight: 600;
      color: ${colors.blue};
    }
  }

  strong {
    font-size: 2.25rem;
    color: ${colors.text_title};
  }

  p {
    font-size: 1.25rem;
    color: ${colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;
