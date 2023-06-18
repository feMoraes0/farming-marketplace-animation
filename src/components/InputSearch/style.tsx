import { Animated } from 'react-native';
import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';

export const AnimatedContainer = styled(Animated.View)`
  margin-top: 10px;
  padding: 10px;
`;

export const Input = styled.View`
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  background-color: rgb(244, 244, 244);
  flex-direction: row;
`;

export const InputText = styled.TextInput`
  font-size: 17px;
  color: rgb(180, 180, 180);
  font-family: 'GT-Walsheim-Regular';
`;

export const InputIcon = styled(Feather)`
  margin-right: 10.0px;
  color: rgb(180, 180, 180);
`;
