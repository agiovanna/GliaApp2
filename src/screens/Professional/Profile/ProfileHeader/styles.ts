import { getBottomSpace } from "react-native-iphone-x-helper";
import styled, {css} from "styled-components/native";

export const Screen = styled.View`
justify-content: center;
align-items: center;
${({theme}) => css`
        background-color: ${theme.COLORS.PURPLE};
    `};
height: 400px;
`

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`

export const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
border-radius: 100px;
width: 200px;
height: 200px
`;

export const InfoContainer = styled.View`
justify-content: center;
color: white;
margin-top: 20px;
`

export const ProfessionalName = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: white;
`

export const InfoA = styled.View`
margin-top: 20px;
align-items: center;
flex-direction: row;
justify-content: center;

`

export const TitleA = styled.Text`
    font-size: 18px;
    color: white;
    margin-left: 10px;
`

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