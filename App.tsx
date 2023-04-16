import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'GT-Walsheim-Regular': require('./assets/fonts/GTWalsheimProRegular.ttf'),
    'GT-Walsheim-Bold': require('./assets/fonts/GTWalsheimProBold.ttf'),
  });

  useCallback(() => {
    if (fontsLoaded) {
      console.warn('done');
    } else {
      console.warn('error to load font family')
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>fruits & vegetables</Text>
          <Text>Icon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    height: 200,
    backgroundColor: 'rgba(231, 244, 199, 1)',
    width: '100%',
    borderBottomEndRadius: 30.0,
    borderBottomLeftRadius: 30.0,
    paddingBottom: 30.0,
    paddingHorizontal: 20.0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'

  },
  headerText: {
    fontSize: 23.0,
    fontFamily: 'GT-Walsheim-Regular',
    color: '#131313',
  }
});
