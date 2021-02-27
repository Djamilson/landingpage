import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  z-index: 1;
  background: ${colors.colorBoxFooter};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  top: 0;
  margin-top: 0vh;

  border: 0;

  header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 15vh;

    border-bottom: 1px solid ${colors.colorLineInWhite};

    h1 {
      font-weight: bold;
      font-size: 20px;
      color: ${colors.colorTitleInPrimary};
      strong {
        font-weight: bold;
        font-size: 22px;
        color: ${colors.colorBackground01};
      }
    }
    section {
      width: 50vw;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        font-size: 14px;
        color: ${colors.colorButtonText};
        text-decoration: none;
        transition: transform 0.8s;

        &:hover {
          transform: translateY(-10px);
        }
      }
      a + a {
        margin-left: 20px;
      }
    }
  }

  footer {
    border-top: 1px solid ${colors.colorLineInWhite};
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 20vh;
    top: 0;
    right: 0;

    span {
      margin-top: 30px;
      strong {
        font-weight: bold;
        color: ${colors.colorBackground01};
      }
    }
  }
`;

export const SocialNetwork = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  justify-content: center;
  align-items: center;

  border: 0;

  article {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 50vh;
    h1 {
      font-weight: bold;
      font-size: 20px;
      color: ${colors.colorTitleInPrimary};
      margin-bottom: 1rem;
      strong {
        font-weight: bold;
        font-size: 22px;
        color: ${colors.colorBackground01};
      }
    }
    span {
      font-size: 16px;
      color: ${colors.colorTitleInPrimary};
      margin-bottom: 5px;
    }
    h2 {
      font-weight: bold;
      margin-top: 1rem;
      font-size: 18px;
      color: ${colors.colorBackground01};
    }
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 0.5rem;

    justify-content: space-around;

    border: 0;
  }
`;

export const Facebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vw;
  min-width: 8vw;
  height: 30vh;
  background: none;
  border: 0;

  a {
    text-decoration: none;
    transition: transform 0.8s;

    svg {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      font-size: 180px;
      line-height: 60px;
      vertical-align: middle;
      background: #3867b9;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      // transform: scale(1);
      transform: translateY(-10px);
    }
  }
`;

export const Instagram = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vw;
  min-width: 8vw;
  height: 30vh;
  background: none;

  a {
    text-decoration: none;
    transition: transform 0.8s;

    svg {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 20px;
      color: #fff;

      font-size: 180px;
      line-height: 60px;
      vertical-align: middle;
      background: #d6249f;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      // transform: scale(1);
      transform: translateY(-10px);
    }
  }
`;
export const Twitter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vw;
  min-width: 8vw;
  height: 30vh;
  background: none;

  a {
    text-decoration: none;
    transition: transform 0.8s;

    svg {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      font-size: 180px;
      line-height: 60px;
      vertical-align: middle;
      background: #00b9f2;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
`;

export const YouTube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vw;
  min-width: 8vw;
  height: 30vh;

  background: none;

  a {
    text-decoration: none;
    transition: transform 0.8s;

    svg {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 20px;
      color: #cd322c;
      padding: 0.5rem;

      font-size: 170px;
      line-height: 60px;
      vertical-align: middle;
      background: #fff;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
`;
