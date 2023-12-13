import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';

export type TypeProps = 'primary' | 'secondary';

// Interno
type Props = {
    type: TypeProps;
}

export const InputText = styled(TextInput).attrs<Props>(({ theme, type }) => ({
    placeholderTextColor: type === 'primary' ? theme.COLORS.DARKBLUE : theme.COLORS.BLACK,
    backgroundColor: type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.LIGHT_PURPLE,
})) <Props>`
  width: 95%;
  height: 56px;
  border-radius: 12px;
  font-size: 14px;
  padding-left: 20px;
  margin-bottom: 10px;
  border-width: 2px;
  border-style: solid;

  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.COLORS.DARKBLUE : theme.COLORS.BLACK};
    border-color: ${type === 'primary' ? theme.COLORS.PURPLE : theme.COLORS.LIGHT_PURPLE};
  `}
`;

