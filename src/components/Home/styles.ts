import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  max-height: 992px;
  padding: 2.5rem 8rem;
  border: 0;
  flex-direction: column;
  align-items: center;
  top: 0;

  section {
    top: 0;
    margin-top: 10rem;
    width: 100%;
    height: 94vh;
    border: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    article {
      display: flex;
      flex-direction: column;
      width: 50vw;
    }
    section {
      margin-top: 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      height: 100%;
      position: relative;
    }
  }
`;

export const ContainerImage = styled.section`
  top: 0;
  margin-top: 10rem;
  width: 100%;
  height: 94vh;
  border: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  article {
    display: flex;
    flex-direction: column;
    width: 50vw;
  }
  section {
    margin-top: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 100%;
    position: relative;
  }
`;
