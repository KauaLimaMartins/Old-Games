import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 90vw;
  margin: 25px 0;
  align-items: center;
  justify-content: space-between;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 60vw;
  height: 90vh;
  border-radius: 10px;
  background: #fff;
`;

export const PrincipalTitle = styled.h1`
  color: #322153;
  font-size: 2.6rem;
  font-family: Helvetica;
`;
