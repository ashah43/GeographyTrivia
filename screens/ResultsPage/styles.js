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
        width: 250, 
        height: 250, 
        marginBottom: 20, 
    },
    title: {
        fontSize: 48,
        fontFamily: 'LuckiestGuy',
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40, 
        marginTop: 10,
        paddingHorizontal: 60,
    },
    playButton: {
        backgroundColor: 'purple', 
        
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 40,
        marginBottom: 40, 
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
        marginBottom: 20, 
        marginTop: 0 ,
    },
    rulesButton: {
        backgroundColor: 'purple', 
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
