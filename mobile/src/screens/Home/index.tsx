import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text, ImageBackground } from 'react-native';

import styles from './styles';

const Home: React.FC = () => {
    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
            resizeMode="contain"
        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>
                    O lugar ideal para encontrar seu novo game
                </Text>
                <Text style={styles.description}>
                    Ajudamos pessoas a encontrarem jogos disponiveis para doação
                    de forma fácil e direta.
                </Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={() => {}}>
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" color="#FFF" size={22} />
                    </View>
                    <Text style={styles.buttonText}>Encontrar jogos</Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
};

export default Home;
