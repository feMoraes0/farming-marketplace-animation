import { useEffect } from 'react';
import { Dimensions, Animated } from 'react-native';
import { AnimatedContainer, Input, InputIcon, InputText } from './style';

const { width } = Dimensions.get('screen');

const InputSearch = () => {
  const animatedWidth = new Animated.Value(85);

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: width,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedContainer style={{ width: animatedWidth }}>
      <Input>
        <InputIcon name='search' size={26.0} />
        <InputText placeholder='search' />
      </Input>
    </AnimatedContainer>
  )
}

export default InputSearch;
