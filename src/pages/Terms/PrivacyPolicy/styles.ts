import styled from 'styled-components';

import { colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  flex-wrap: wrap;
  height: 900px;
  align-content: space-between;

  width: 100%;
  height: auto;
  border: 0;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  border: 0;
  padding: 10rem;
  background: ${colors.colorInputBackground};

  margin-top: 8rem;
  div {
    h2 {
      font-size: 1.25rem;
      color: ${colors.colorTextcomplement};
      font-weight: bold;
      margin-bottom: 1rem;
      strong {
        font-size: 1.35rem;
        font-weight: bolder;
      }
    }

    p {
      font-size: 1rem;
      color: ${colors.colorTextcomplement};
      text-align: justify;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
  }
`;
