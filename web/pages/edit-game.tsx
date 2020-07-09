import React from 'react';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';

import {
    Container,
    CenterContainer,
    CenterRightContainer,
    CenterLeftContainer,
    Image,
    Input,
    ButtonRight,
    DescriptionRight,
    TitleRight,
    CancelEdition,
} from '../styles/edit-game';

const EditGame: React.FC = () => {
    return (
        <Container>
            <CenterContainer>
                <CenterLeftContainer>
                    <FaTrash size={18} />

                    <Image src="https://assets.b9.com.br/wp-content/uploads/2019/09/Minecraft_Box_Shot_.0-1200x720.jpg" />

                    <Input placeholder="Novo nome do jogo" value="Minecraft" />
                    <Input
                        placeholder="Nova descrição do jogo"
                        value="Minecraft é um jogo muito top mesmo, não tem nem
                                comparação com outros jogos."
                    />
                </CenterLeftContainer>
                <CenterRightContainer>
                    <TitleRight>
                        Gostou do novo
                        <br />
                        visual do seu
                        <br />
                        game?
                    </TitleRight>
                    <DescriptionRight>
                        Terminou de fazer as mudanças do
                        <br />
                        seu game? Então finalize!
                    </DescriptionRight>

                    <Link href="/dashboard">
                        <ButtonRight>Finalizar</ButtonRight>
                    </Link>
                    <CancelEdition>
                        ou{' '}
                        <Link href="/dashboard">
                            <a>cancele as mudanças</a>
                        </Link>
                    </CancelEdition>
                </CenterRightContainer>
            </CenterContainer>
        </Container>
    );
};

export default EditGame;
