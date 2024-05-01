import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0, 
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  questionText: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'LuckiestGuy',
    top: height * 0.05,
    left: 0,
  },
  question: {
    fontSize: 25,
    fontFamily: 'LuckiestGuy',
    top: height * 0.15,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    top: height * 0.75, 
    position: "absolute",
  },
  inputUnderline: {
    width: '50%',           
  borderBottomWidth: 5,   
  position: 'absolute',  
  top: height * 0.78,     
  textAlign: "center",
  borderRightWidth: 500,
  borderLeftWidth: 500,  
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#000',
    paddingVertical: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.1, 
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'LuckiestGuy',
    fontWeight: 'bold',
  },
  timerDisplay: {
    alignItems: "center",
    textAlign: 'center',
    alignContent: "center",
    color: 'black',
    fontSize: 20,
    fontFamily: 'LuckiestGuy',
    fontWeight: 'bold',
    
  },
});
