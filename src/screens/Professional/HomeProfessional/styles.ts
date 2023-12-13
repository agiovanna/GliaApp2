import { Animated } from 'react-native/Libraries/Animated/Animated';
import styled from 'styled-components/native';

export const Drawer = styled(Animated.View)`
  position: absolute;
  bottom: -30;
  left: 0;
  right: 0;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
`