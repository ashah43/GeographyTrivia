import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7C53C3', // The purple background color
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  rulesHeaderBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  rulesListBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 30, // Add extra padding at the bottom for aesthetic
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'LuckiestGuy',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  rule: {
    fontFamily: 'LuckiestGuy',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'LuckiestGuy',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7C53C3', // The purple color to match the background
  },
});
