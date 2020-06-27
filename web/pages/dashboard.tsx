import React from 'react';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';
import { MdSettings, MdAdd } from 'react-icons/md';

import SEO from '../next-seo.config';
import GlobalStyles from '../styles/global';
import {
    Container,
    Header,
    ListGamesContainer,
    GameContainer,
    GameConsole,
    GameDescription,
    GameImage,
    GameTitle,
    ButtonAddGame,
} from '../styles/dashboard';

import GoBack from '../components/GoBack';

const DashBoard: React.FC = () => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <Container>
                <Header>
                    <GoBack />
                    <MdSettings size={26} id="settings" />
                </Header>

                <Link href="/create-game">
                    <ButtonAddGame>
                        <MdAdd color="#FFF" size={20} />
                        <p>Adicionar game</p>
                    </ButtonAddGame>
                </Link>

                <ListGamesContainer>
                    <Link href="/edit-game">
                        <GameContainer>
                            <GameImage
                                src="https://assets.b9.com.br/wp-content/uploads/2019/09/Minecraft_Box_Shot_.0-1200x720.jpg"
                                alt="game image"
                            />
                            <GameTitle>Minecraft</GameTitle>
                            <GameConsole>Xbox One</GameConsole>
                            <GameDescription>
                                Minecraft é um jogo muito top mesmo, não tem nem
                                comparação com outros jogos.
                            </GameDescription>
                        </GameContainer>
                    </Link>
                    <Link href="/edit-game">
                        <GameContainer>
                            <GameImage
                                src="https://assets.b9.com.br/wp-content/uploads/2019/09/Minecraft_Box_Shot_.0-1200x720.jpg"
                                alt="game image"
                            />
                            <GameTitle>Minecraft</GameTitle>
                            <GameConsole>Xbox One</GameConsole>
                            <GameDescription>
                                Minecraft é um jogo muito top mesmo, não tem nem
                                comparação com outros jogos.
                            </GameDescription>
                        </GameContainer>
                    </Link>
                    <Link href="/edit-game">
                        <GameContainer>
                            <GameImage
                                src="https://assets.b9.com.br/wp-content/uploads/2019/09/Minecraft_Box_Shot_.0-1200x720.jpg"
                                alt="game image"
                            />
                            <GameTitle>Minecraft</GameTitle>
                            <GameConsole>Xbox One</GameConsole>
                            <GameDescription>
                                Minecraft é um jogo muito top mesmo, não tem nem
                                comparação com outros jogos.
                            </GameDescription>
                        </GameContainer>
                    </Link>
                    <Link href="/edit-game">
                        <GameContainer>
                            <GameImage
                                src="https://assets.b9.com.br/wp-content/uploads/2019/09/Minecraft_Box_Shot_.0-1200x720.jpg"
                                alt="game image"
                            />
                            <GameTitle>Minecraft</GameTitle>
                            <GameConsole>Xbox One</GameConsole>
                            <GameDescription>
                                Minecraft é um jogo muito top mesmo, não tem nem
                                comparação com outros jogos.
                            </GameDescription>
                        </GameContainer>
                    </Link>
                </ListGamesContainer>
            </Container>
        </>
    );
};

export default DashBoard;
