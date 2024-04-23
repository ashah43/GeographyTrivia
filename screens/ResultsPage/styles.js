import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender', // Mustard background color
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
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40, // Space below the title
        marginTop: 10,
        paddingHorizontal: 60,
    },
    playButton: {
        backgroundColor: 'purple', // Green button color
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 40, // Space below the button
        marginTop: 20,
    },
    playButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 32,
        color: 'grey',
        fontFamily: 'LuckiestGuy',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Space below the subtitle
        marginTop: 0 ,
    },
    rulesButton: {
        backgroundColor: 'purple', // Green button color
        paddingVertical: 20,

        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 30, // Space below the button
        marginTop: 20,
    },
    rulesButtonText: {
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'white',
        fontWeight: 'bold',
    },
    resultsText: {
    
       
        fontSize: 24,
        fontFamily: 'LuckiestGuy',
        color: 'grey',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
    },
 
});

export default styles;
