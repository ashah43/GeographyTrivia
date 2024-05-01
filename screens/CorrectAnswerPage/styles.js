import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    globeImage: {
        width: 250, 
        height: 250, 
        marginBottom: 20, 
    },
    title: {
        fontSize: 48,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
    },
    playButton: {
        backgroundColor: 'green',
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 100,
        marginTop: 30,
    },
    playButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36,
        color: 'white',
        fontFamily: 'LuckiestGuy',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: -50,
    },
    rulesButton: {
        backgroundColor: 'green', 
        paddingVertical: 20,

        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30,
    },
    rulesButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
 
});

export default styles;
