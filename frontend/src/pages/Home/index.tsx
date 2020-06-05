import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import game from '../../assets/game.png';

import Header from '../../components/Header';
import {
  Container,
  Title,
  Description,
  ButtonContainer,
  LeftSideButton,
  RightSideButton,
  TextButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div id="left">
        <Header />

        <Title>
          Doe um <span id="highlight">jogo</span> <br />
          Faça alguém <span id="highlight">feliz</span>
        </Title>

        <Description>
          Old Games é a conexão ideal entre
          <br /> aqueles que são apaixonados por jogos,
          <br />
          não importa qual seja.
        </Description>

        <Link to="/add-game">
          <ButtonContainer>
            <LeftSideButton id="left-button">
              <FiPlus color="#FFF" size={24} />
            </LeftSideButton>

            <RightSideButton id="right-button">
              <TextButton>Cadastre um jogo para doação</TextButton>
            </RightSideButton>
          </ButtonContainer>
        </Link>
      </div>
      <div id="right">
        <img id="gamers" src={game} alt="gamers" />
      </div>
    </Container>
  );
};

export default Home;
