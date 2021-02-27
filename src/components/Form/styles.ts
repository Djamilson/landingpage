import styled from 'styled-components';
import { colors } from '../../styles';
import { Form as Unform } from '@unform/web';

export const Container = styled.header`
  top: 0;
  margin-top: 10rem;
  width: 100%;
  height: 160vh;
  border: 0;
  border-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  article {
    margin-top: 0rem;
    flex: 50vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: column;
    border: 0;
    height: 100vh;
    position: relative;
  }

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
  }
`;

export const Form = styled(Unform)`
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  background: ${colors.colorBoxBase};
  padding-bottom: 50px;

  fieldset {
    border: 0;
    padding: 0rem;
    padding-bottom: 60px;

    legend {
      font: 700 1rem Poppins;
      color: ${colors.colorTextTitle};
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid ${colors.colorLineInWhite};
    }

    a {
      width: 35%;
      height: 2.8rem;
      background: ${colors.colorSecundary};
      color: ${colors.colorTitleInPrimary};
      border: 0;
      border-radius: 0rem;

      font: 700 1rem Poppins;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;

      span {
        display: block;
        background: rgba(0, 0, 0, 0.08);
        width: 42px;
        height: 2.8rem;
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
    }

    fieldset + fieldset {
      margin-top: 3rem;
    }

    footer {
      width: 72vw;
      margin-left: -3.75rem;
      padding: 2.4rem;
      height: 120px;
      background: ${colors.colorBoxFooter};
      border-top: 1px solid ${colors.colorLineInWhite};
      margin-top: 10rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        line-height: 1.4rem;
        color: ${colors.colorTextcomplement};

        img {
          margin-right: 2rem;
        }
      }
    }
  }
`;
