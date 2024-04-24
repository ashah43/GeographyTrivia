import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0, // Remove padding top here since we are using marginTop on children
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  // Use absolute positioning for questionText to place it at 10% of the height
  questionText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'LuckiestGuy',
    top: height * 0.1,
  },
  // Use absolute positioning for question to place it at 30% of the height
  question: {
    fontSize: 24,
    fontFamily: 'LuckiestGuy',
    top: height * 0.2,
  },
  // Use absolute positioning for input to place it at 50% of the height
  input: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    top: height * 0.4, // Assuming the input height is 40, we subtract half of it to center it
  },
  inputUnderline: {
    width: '50%',
    borderBottomWidth: 5,
    position: 'absolute',
    top: height * 0.7,
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#000',
    paddingVertical: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.1, // Adjust to place it 10% from the bottom of the screen
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'LuckiestGuy',
    fontWeight: 'bold',
  },
});
