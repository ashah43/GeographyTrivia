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
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'LuckiestGuy',
    top: height * 0.05,
    left: 0,
  },
  // Use absolute positioning for question to place it at 30% of the height
  question: {
    fontSize: 25,
    fontFamily: 'LuckiestGuy',
    top: height * 0.15,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: "center",
  },
  // Use absolute positioning for input to place it at 50% of the height
  input: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    top: height * 0.5, // Assuming the input height is 40, we subtract half of it to center it
  },
  inputUnderline: {
    width: '50%',           // Set the desired width of the underline
  borderBottomWidth: 5,   // Thickness of the underline
  position: 'absolute',   // Keeps the element in an absolute position
  top: height * 0.78,      // Adjusts the vertical position
  left: -70,
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
    bottom: height * 0.1, // Adjust to place it 10% from the bottom of the screen
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'LuckiestGuy',
    fontWeight: 'bold',
  },
});
