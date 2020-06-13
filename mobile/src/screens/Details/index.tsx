import React, { useEffect, useState } from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Linking,
} from 'react-native';

import api from '../../services/api';
import styles from './styles';

const Details: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as DetailParams;

    // States
    const [data, setData] = useState<Data>({} as Data);

    // Effects
    useEffect(() => {
        api.get(`games/${routeParams.game_id}`).then((response) =>
            setData(response.data)
        );
    }, []);

    // Functions
    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleComposeMail() {
        MailComposer.composeAsync({
            subject: `Interesse no jogo ${data.game.game_name}`,
            recipients: [data.game.email],
            body: `Olá ${data.game.owner}, vi que você disponibilizou o game ${data.game.game_name} para doação no site da OldGames, e ...`,
        });
    }

    function handleSendWhatsapp() {
        Linking.openURL(
            `whatsapp://send?phone=55+${data.game.whatsapp}&text=Tenho interesse no jogo ${data.game.game_name}`
        );
    }

    // Shows a loading indicator if data has not yet been received
    if (!data.game) {
        return (
            <ActivityIndicator
                size="large"
                color="#AC38FF"
                style={{ flex: 1 }}
            />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Feather
                        name="arrow-left"
                        size={20}
                        color="#AC38FF"
                        onPress={handleNavigateBack}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.gameImage}
                    source={{
                        uri:
                            'http://lojasaraiva.vteximg.com.br/arquivos/ids/655497/1005800289.jpg?v=636968164320630000',
                    }}
                />
                <ScrollView>
                    <Text style={styles.gameName}>{data.game.game_name}</Text>
                    <Text style={styles.gameConsole}>
                        {data.consoleTitle.map((item) => item.title)}
                    </Text>
                    <Text style={styles.gameDescription}>
                        {data.game.game_description}
                    </Text>
                    <Text style={styles.gameOwner}>{data.game.owner}</Text>

                    <View style={styles.address}>
                        <Text style={styles.addressTitle}>Endereço</Text>
                        <Text style={styles.addressContent}>
                            {data.game.city}, {data.game.uf}
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleSendWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleComposeMail}>
                    <Feather name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
};

export default Details;
