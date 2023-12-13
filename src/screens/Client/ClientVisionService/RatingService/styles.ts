import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#4B0082',

  },
  text: {
    color: 'white'
  },
  textInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});