import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import GlobalStyles from '../styles/global';
import Dropzone from '../components/Dropzone';

import {
    Container,
    CenterContainer,
    Header,
    Input,
    Select,
    Button,
} from '../styles/create-game';

const CreateGame: React.FC = () => {
    const [location, setLocation] = useState<[number, number]>([0, 0]);
    const [formData, setFormData] = useState({
        game_name: '',
        game_description: '',
        latitude: 0,
        longitude: 0,
    });
    const [selectedFile, setSelectedFile] = useState<File>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            setLocation([latitude, longitude]);
        });
    }, []);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData);
    }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();

        console.log(selectedFile);
    }

    return (
        <>
            <DefaultSeo {...SEO} />
            <GlobalStyles />

            <Container>
                <Header>
                    <Link href="/dashboard">
                        <div>
                            <IoMdArrowBack size={22} />
                            <p>Voltar</p>
                        </div>
                    </Link>
                </Header>

                <CenterContainer onSubmit={handleSubmit}>
                    <Dropzone onFileUploaded={setSelectedFile} />

                    <Input
                        name="game_name"
                        placeholder="Nome do jogo"
                        onChange={handleInputChange}
                    />
                    <Input
                        name="game_description"
                        placeholder="Descrição do jogo"
                        onChange={handleInputChange}
                    />
                    <div id="lat-lon">
                        <Input
                            name="latitude"
                            className="lat"
                            placeholder="Latitude"
                            onChange={handleInputChange}
                            value={location[0]}
                        />
                        <Input
                            name="longitude"
                            className="lon"
                            placeholder="Longitude"
                            onChange={handleInputChange}
                            value={location[1]}
                        />
                    </div>
                    <div id="selects">
                        <Select className="uf">
                            <option value="0">Selecione uma UF</option>
                        </Select>
                        <Select className="city">
                            <option value="0">Selecione uma Cidade</option>
                        </Select>
                    </div>
                    <Button type="submit">Finalizar</Button>
                </CenterContainer>
            </Container>
        </>
    );
};

export default CreateGame;
