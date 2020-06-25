import React from 'react';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { DefaultSeo } from 'next-seo';

import GlobalStyle from '../styles/global';
import SEO from '../next-seo.config';
import Header from '../components/Header';

import {
    ButtonContainer,
    Container,
    Description,
    LeftSideButton,
    RightSideButton,
    TextButton,
    Title,
    RegisterText,
} from '../styles/index';

const Home: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <DefaultSeo {...SEO} />
            <Container>
                <div id="left">
                    <Header />

                    <Title>
                        Troque um <span id="highlight">jogo</span> <br />
                        Faça alguém <span id="highlight">feliz</span>
                    </Title>

                    <Description>
                        Old Games ajuda pessoas
                        <br /> que são apaixonadas por jogos,
                        <br />a trocarem seus games usados.
                    </Description>

                    <Link href="/login">
                        <ButtonContainer>
                            <LeftSideButton id="left-button">
                                <FiPlus color="#FFF" size={24} />
                            </LeftSideButton>

                            <RightSideButton id="right-button">
                                <TextButton>Faça Login</TextButton>
                            </RightSideButton>
                        </ButtonContainer>
                    </Link>
                    <Link href="/register">
                        <RegisterText>
                            Não tem uma conta? <span>Registre-se</span>
                        </RegisterText>
                    </Link>
                </div>
                <div id="right">
                    <img id="gamers" src="/game.png" alt="gamers" />
                </div>
            </Container>
        </>
    );
};

export default Home;
