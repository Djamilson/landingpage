import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.5rem 0;
  width: 100%;
  border: 0;

  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  strong {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;
