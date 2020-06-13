import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight + 20,
    },

    gameImage: {
        width: '100%',
        height: '45%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 28,
        marginBottom: 20,
    },

    gameName: {
        color: '#322153',
        fontSize: 28,
        fontFamily: 'Ubuntu_700Bold',
    },

    gameConsole: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 22,
        lineHeight: 24,
        marginTop: 8,
        marginBottom: 10,
        color: '#AC38CC',
    },

    gameOwner: {
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        fontSize: 18,
        marginTop: 4,
        color: '#AC38CC',
    },

    gameDescription: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80',
    },

    address: {
        marginTop: 28,
    },

    addressTitle: {
        color: '#322153',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    addressContent: {
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80',
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        marginTop: -20,
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        width: '48%',
        backgroundColor: '#AC38FF',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
    },
});

export default styles;
