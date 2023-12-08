import { getBottomSpace } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";
// import theme from "../../../theme/theme";


export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    },
})`
    width: 100%;
`;

export const AddCatalog = styled.View`
width: 40%;
margin-right: 500px;
flex: 0.34;
border-radius: 10px;
`;
// ${({theme}) => css`
// border-bottom-color: ${theme.COLORS.WHITE};
// `};


export const ModalText = styled.Text`
text-align: center;
    font-size: 20px;
`;

export const BoxCatalog = styled.View`
flex: 1px;
padding-left: 20px;
padding-top: 20px;`;

export const CatalogContainer = styled.View`
padding:  20px;
border-bottom-width: 40px;
`;
// ${({theme}) => css`
// border-bottom-color: ${theme.COLORS.WHITE};
// `};

export const CatalogTitle = styled.Text`
font-weight: bold;
font-size: 15px;
text-align: center;
`;

export const CatalogDesc = styled.Text`
font-size: 10px;
text-align: center;
`;

export const ItemShadow = styled.View`
width: 30%;
padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    border-radius: 10px;
    `;
//     ${({theme}) => css`
// border-bottom-color: ${theme.COLORS.PINK};
// `};


export const BoxItem = styled.View`
align-items: center;
margin-right: 20px;
margin-top: 50px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);`;

export const ImgItem = styled.Image`
height: 200px;
width: 200px;
border-radius: 10px`;

export const Text = styled.Text`
font-size: 20px;
  margin-top: 20px;`;

export const CenteredView = styled.View`
justifyContent: 'center',
alignItems: 'center', `;

export const ModalView = styled.View
// .attrs(({ theme}) => ({
//     colors: theme.COLORS.WHITE
// }))
`
border-radius: 20px;
padding: 35px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const InputCatalog = styled.TextInput
// .attrs(({theme}) => ({
//     colors: theme.COLORS.PINK
// }))
`
padding-left: 20px;
padding-right: 20px;
border-radius: 10px;
border-width: 2px;
font-size: 18px; 
`;

export const TextStyle = styled.Text
// .attrs(({theme}) => ({
//     colors: theme.COLORS.WHITE
// }))
`
font-weight: bold;
text-align: center;
`;

export const ButtonClose = styled.Pressable
// .attrs(({theme}) => ({
//     colors: theme.COLORS.PINK
// }))
`
border-radius: 20px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);`;

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
        text:{
          color: 'white'
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
      });