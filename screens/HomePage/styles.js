import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5a623', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    globeImage: {
        width: 250, // Adjust size as needed
        height: 250, // Adjust size as needed
        marginBottom: 20,
    },
    title: {
        fontSize: 64, // Large text size for title
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
    },
    playButton: {
        backgroundColor: '#50e3c2', // Green button color
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30, 
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
    },
    rulesButton: {
        backgroundColor: '#50e3c2', // Green button color
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
