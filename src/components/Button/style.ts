import styled from "styled-components/native";
import theme from "../../theme";

export type TypeProps = 'primary' | 'secondary' | 'terciary';

type TouchableOpacityProps = {
    type?: TypeProps;
}

export const ButtonT = styled.TouchableOpacity<TouchableOpacityProps>`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    width: 95%;
    align-items: center;
    margin-top: 24px;
    
    background-color: ${({ theme, type }) => {
        switch (type) {
            case 'primary':
                return theme.COLORS.VIOLET;
            case 'secondary':
                return theme.COLORS.YELLOW;
            case 'terciary':
                return theme.COLORS.PURPLE;
        }
    }};
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${theme.COLORS.WHITE};
    font-weight: 600;
`;

//Spiner de load para mostrar que a ação está sendo executada
export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.PURPLE
}))``;