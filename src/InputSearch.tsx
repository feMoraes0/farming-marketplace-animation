import { useEffect } from 'react';
import { StyleSheet, View, Dimensions, Animated, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const { width } = Dimensions.get('screen');

const BOX_PADDING = 20.0;
const ELEMENT_WIDTH = width - BOX_PADDING;

const InputSearch = () => {
  const animatedWidth = new Animated.Value(85);

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: ELEMENT_WIDTH,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { width: animatedWidth }]}>
      <View style={styles.inputContainer}>
        <Feather name='search' size={26.0} style={styles.inputIcon} />
        <TextInput placeholder='search' style={styles.inputBox} />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10.0,
    padding: (BOX_PADDING / 2),
  },
  inputContainer: {
    width: ELEMENT_WIDTH,
    padding: 15.0,
    borderRadius: BOX_PADDING,
    backgroundColor: 'rgb(244, 244, 244)',
    flexDirection: 'row',
  },
  inputIcon: {
    marginRight: 10.0,
    color: 'rgb(180, 180, 180)',
  },
  inputBox: {
    fontSize: 17.0,
    flex: 1,
    color: 'rgb(180, 180, 180)',
    fontFamily: 'GT-Walsheim-Regular',
  }
});

export default InputSearch;
