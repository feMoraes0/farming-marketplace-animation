import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Home from './src/pages/Home';

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

  return ( <Home /> );
}
