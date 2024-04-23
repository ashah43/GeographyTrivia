import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen', // Mustard background color
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
        fontSize: 48, // Large text size for title
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Space below the title
    },
    playButton: {
        backgroundColor: 'green', // Green button color
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 100, // Space below the button
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
        marginBottom: 30, // Space below the subtitle
        marginTop: -50,
    },
    rulesButton: {
        backgroundColor: 'green', // Green button color
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
 
});

export default styles;
