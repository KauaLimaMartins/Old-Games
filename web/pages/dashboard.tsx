import React, { useState } from 'react';
import Link from 'next/link';
import { MdAdd } from 'react-icons/md';

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
    const [gameCount, setGameCount] = useState(1);

    return (
        <Container>
            <Header>
                <GoBack />
                {/* <Link href="/settings">
                            <MdSettings size={26} id="settings" />
                        </Link> 
                    */}
            </Header>
            {gameCount > 0 ? (
                <>
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
                                    Minecraft é um jogo muito top mesmo, não tem
                                    nem comparação com outros jogos.
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
                                    Minecraft é um jogo muito top mesmo, não tem
                                    nem comparação com outros jogos.
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
                                    Minecraft é um jogo muito top mesmo, não tem
                                    nem comparação com outros jogos.
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
                                    Minecraft é um jogo muito top mesmo, não tem
                                    nem comparação com outros jogos.
                                </GameDescription>
                            </GameContainer>
                        </Link>
                    </ListGamesContainer>
                </>
            ) : (
                <h1>Vaziu</h1>
            )}
        </Container>
    );
};

export default DashBoard;
