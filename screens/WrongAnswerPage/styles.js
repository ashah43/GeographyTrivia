import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink', 
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
        marginTop: 10,
    },
    playButton: {
        backgroundColor: 'red', 
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 50, 
        marginTop: 0,
    },
    playButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'LuckiestGuy',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
        marginTop: 0 ,
    },
    rulesButton: {
        backgroundColor: 'red', 
        paddingVertical: 20,

        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30,
        marginTop: 20,
    },
    rulesButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
 
});

export default styles;
