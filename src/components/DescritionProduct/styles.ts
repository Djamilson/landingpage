import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 2rem;


  article {
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;
  
    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${colors.text_title};
    }

    h1 {
      font-size: 1rem;
      font-weight: 500;
      color: ${colors.text_title};
      margin-top: 2rem;
      strong {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colors.green_};
      }
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
    }
  }

  section {
    top: 0;
    margin-top: 0;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

   
    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${colors.text_title};
    }

    h1 {
      font-size: 1rem;
      font-weight: 500;
      color: ${colors.text_title};
      margin-top: 2rem;
      strong {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${colors.green_};
      }
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
    }
  }
`;
