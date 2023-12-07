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
    textInput:{
      width: "80%",
      // borderWidth: 2,
      // borderColor: "#000",
      // paddingHorizontal: 12,
      // paddingVertical: 6,
      // borderRadius: 10,
      // fontSize: 16,
      // marginVertical: 20,
    },
    text:{
      color: 'white'
    },
    buttonStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      padding: 15,
      backgroundColor: 'green',
    },
  });