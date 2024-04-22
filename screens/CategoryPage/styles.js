import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'LuckiestGuy',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  backbutton:{
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backbuttontext: {
    fontFamily: 'LuckiestGuy',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'LuckiestGuy',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  colors: [
    '#6a5acd', // SlateBlue
    '#3cb371', // MediumSeaGreen
    '#20b2aa', // LightSeaGreen
    '#ffd700', // Gold
    '#cd853f', // Peru
  ],
});