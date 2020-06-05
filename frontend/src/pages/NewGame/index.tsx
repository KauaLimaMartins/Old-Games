import React from 'react';

import Header from '../../components/Header';
import GoBack from '../../components/GoBack';

import {
  Container,
  TopContainer,
  CenterContainer,
  PrincipalTitle,
} from './styles';

const NewGame: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <Header />
        <GoBack />
      </TopContainer>
      <CenterContainer>
        <PrincipalTitle>Cadastro do jogo</PrincipalTitle>
      </CenterContainer>
    </Container>
  );
};

export default NewGame;
