import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles';

import Button from '../Button';

export const Container = styled.header`
  top: 0;
  margin-top: 10rem;
  width: 100%;
  height: 94vh;
  border: 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  header {
    line-height: 1.5rem;
    margin-bottom: 2rem;
    
    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${colors.text_title};
    }
  }
  div {
    top: 0;
    width: 100%;
    height: 94vh;
    border: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;

    section {
      margin-top: 0rem;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: column;
      border: 0;
      height: 100vh;
      position: relative;
      button {
        width: 300px;
        height: 200px;
        border: 0;
        margin-bottom: 0.5rem;
        img {
          opacity: 0;
          float: right;
          width: 3rem;
          transform: rotate(-90deg);
          margin-right: 12rem;
          transition: background-color 0.2s;
        }

        &:hover {
          img {
            opacity: 1;
          }

          opacity: 0.8;
        }
      }

      button:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

interface IPropsImage {
  url: string;
}

export const ContainerImage = styled.article<IPropsImage>`
  width: 50vw;

  background: url(${(props) => props.url}) no-repeat center;
  background-size: contain;
  margin-bottom: 2rem;
  height: 100vh;
  max-height: 100vh;
  img {
    width: 50vw;
    height: 100vh;
    max-height: 100vh;
  }
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 8px;
  }
`;

interface IPropsMiniImage {
  url: string;
}
export const ButtonImage = styled.button<IPropsMiniImage>`
  background: url(${(props) => props.url}) no-repeat center;
  background-size: contain;
`;
