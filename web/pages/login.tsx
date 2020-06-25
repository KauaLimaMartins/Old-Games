import React, { FormEvent, useState, ChangeEvent } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import axios from 'axios';

import GlobalStyles from '../styles/global';

import SEO from '../next-seo.config';

import {
    Container,
    CenterContainer,
    CenterLeftContainer,
    CenterRightContainer,
    Input,
    Button,
    Title,
    Description,
    ButtonRight,
    DescriptionRight,
    TitleRight,
} from '../styles/login';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent): Promise<void> {
        event.preventDefault();

        const response = await axios.post(
            'http://localhost:4000/sessions',
            formData
        );

        console.log(response);
    }

    return (
        <>
            <NextSeo {...SEO} />
            <GlobalStyles />
            <Container>
                <CenterContainer>
                    <CenterLeftContainer onSubmit={handleSubmit}>
                        <Link href="/">
                            <GrFormClose size={24} />
                        </Link>
                        <Title>Fazer login</Title>
                        <Description>
                            Faça login para
                            <br /> cadastrar e trocar seus jogos!
                        </Description>

                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onChange={handleInputChange}
                        />
                        <Button>Entrar</Button>
                    </CenterLeftContainer>

                    <CenterRightContainer>
                        <TitleRight>
                            Bem vindo,
                            <br /> Irmão!
                        </TitleRight>
                        <DescriptionRight>
                            Não tem uma conta?
                            <br />
                            Registre-se!
                        </DescriptionRight>

                        <Link href="/register">
                            <ButtonRight type="submit">Registrar</ButtonRight>
                        </Link>
                    </CenterRightContainer>
                </CenterContainer>
            </Container>
        </>
    );
};

export default Login;
