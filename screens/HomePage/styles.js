import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5a623', // Mustard background color
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, // Add padding horizontally
    },
    globeImage: {
        width: 250, // Adjust size as needed
        height: 250, // Adjust size as needed
        marginBottom: 20, // Space below the image
    },
    title: {
        fontSize: 64, // Large text size for title
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Space below the title
    },
    playButton: {
        backgroundColor: '#50e3c2', // Green button color
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30, // Space below the button
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
        marginBottom: 30, // Space below the subtitle
    },
    rulesButton: {
        backgroundColor: '#50e3c2', // Green button color
        paddingVertical: 20,

        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30, // Space below the button
    },
    rulesButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    testButton: {
        backgroundColor: '#50e3c2', // Green button color
        paddingVertical: 10,

        paddingHorizontal: 20,
        borderRadius: 40,
        position: 'absolute',
        top: 60,
        right: 30,
        padding: 10,
    },
    testButtonText: {
        fontSize: 14,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    wrongButton: {
        backgroundColor: '#50e3c2', // Green button color
        paddingVertical: 10,

        paddingHorizontal: 20,
        borderRadius: 40,
        position: 'absolute',
        top: 100,
        right: 30,
        padding: 10,
    },
    wrongButtonText: {
        fontSize: 14,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    resultsButton: {
        backgroundColor: '#50e3c2', // Green button color
        paddingVertical: 10,

        paddingHorizontal: 20,
        borderRadius: 40,
        position: 'absolute',
        top: 140,
        right: 30,
        padding: 10,
    },
    resultsButtonText: {
        fontSize: 14,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
 
});

export default styles;
