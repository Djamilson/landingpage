import { shade } from 'polished';
import styled, { css } from 'styled-components';
import { colors } from '../../styles';

import MyButton from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  width: 100%;
  font-weight: 600;
  color: ${colors.text_title};
  border: 0;

  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${colors.colorTitleInPrimary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      border-right: 1px solid #f0f1f3;
    }
  }

  strong {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

interface IPropButton {
  isActive: boolean;
  disabled?: boolean;
}
export const Button = styled(MyButton)<IPropButton>`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background: ${(props) =>
    props.isActive ? colors.text_highlight : colors.blue_dark};

  color: ${(props) => (props.isActive ? colors.text_title : colors.text_title)};
  height: 4rem;

  span {
    width: 60px;
    height: 4rem;
    border-radius: 0rem 0 0 0rem;
  }
`;

export const HasFinishedButton = styled.button`
  border: 0;
  line-height: 4rem;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;

  border: 0;
  border-radius: 0.4rem;
  width: 100%;
  min-width: 25%;
  height: 4rem;

  background-color: ${colors.gray_line};

  font: 700 1rem Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 52px;
    height: 4rem;
    border-radius: 0rem 0 0 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  strong {
    flex: 1;
    text-align: center;
    color: ${colors.text};
  }
`;
