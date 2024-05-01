import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7C53C3',
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
    textAlign: "center",
  },
  rulesListBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 30, 
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'LuckiestGuy',
    fontSize: 64,
    fontWeight: 'bold',
    color: '#7C53C3',
    textAlign: "center",
  },
  rule: {
    fontFamily: 'LuckiestGuy',
    fontSize: 32,
    fontWeight: 'bold',
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7C53C3', 
  },
});
