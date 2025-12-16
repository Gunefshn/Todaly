import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      Text.defaultProps = Text.defaultProps || {};
      Text.defaultProps.style = {
        fontFamily: 'Poppins',
      };
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Ana uygulama yapısı */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
