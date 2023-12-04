import { getBottomSpace } from "react-native-iphone-x-helper";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    margin-top: 100px;
    align-self: center;
    ${({theme}) => css`
        color: ${theme.COLORS.PINK};
    `};
`

export const Image = styled.Image`
height: 200px;
width: 200;
borderRadius: 100;`

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#fff',
//       marginTop: 100,
//     },
  
//     imgProfile: {
//       height: 200,
//       width: 200,
//       borderRadius: 100,
//     },
  
//     boxPhoto: {
//       height: 'auto',
//       alignItems: "center",
//     },
  
//     text: {
//       fontSize: 20,
//       marginTop: 20,
//     },
  
//     assessment: {
//       flexDirection: "row",
//       marginTop: 20,
//       alignItems: "center",
//     }
//   });