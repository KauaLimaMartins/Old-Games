import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {
    View,
    Image,
    Text,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

import styles from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const pickerStyle = {
        viewContainer: {
            height: 60,
            backgroundColor: '#FFF',
            borderRadius: 10,
            marginBottom: 8,
            paddingVertical: 4,
        },
        placeholder: {
            fontSize: 16,
            color: '#999',
        },
    };

    // States
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState<string>('0');
    const [selectedCity, setSelectedCity] = useState<string>('0');

    // Effects
    useEffect(() => {
        axios
            .get<IBGEUFResponse[]>(
                'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
            )
            .then((response) => {
                const ufInitials = response.data.map((uf) => uf.sigla);

                setUfs(ufInitials);
            });
    }, []);

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }

        axios
            .get<IBGECityResponse[]>(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
            )
            .then((response) => {
                const cityNames = response.data.map((city) => city.nome);

                setCities(cityNames);
            });
    }, [selectedUf]);

    // Functions
    function handleNavigateToGames() {
        navigation.navigate('Games', { uf: selectedUf, city: selectedCity });
    }

    function showCities(city: string) {
        return {
            label: city,
            value: city,
        };
    }

    function showUfs(uf: string) {
        return {
            label: uf,
            value: uf,
        };
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ImageBackground
                source={require('../../assets/background2.png')}
                style={styles.container}
                resizeMode="center"
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>
                            O lugar ideal para encontrar seu novo game
                        </Text>
                        <Text style={styles.description}>
                            Ajudamos pessoas a encontrarem jogos disponiveis
                            para doação de forma fácil e direta.
                        </Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Estado (UF)',
                            value: '0',
                        }}
                        style={pickerStyle}
                        items={ufs.map((uf) => showUfs(uf))}
                        onValueChange={(uf) => setSelectedUf(uf)}
                        value={selectedUf}
                    />
                    <RNPickerSelect
                        placeholder={{
                            label: 'Cidade',
                            value: '0',
                        }}
                        style={pickerStyle}
                        items={cities.map((city) => showCities(city))}
                        onValueChange={(city) => setSelectedCity(city)}
                        value={selectedCity}
                    />

                    <RectButton
                        style={styles.button}
                        onPress={handleNavigateToGames}
                    >
                        <View style={styles.buttonIcon}>
                            <Icon name="arrow-right" color="#FFF" size={22} />
                        </View>
                        <Text style={styles.buttonText}>Encontrar jogos</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default Home;
