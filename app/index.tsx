import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { suggestions } from '../src/data/suggestions';

export default function Home() {
  const [suggestion, setSuggestion] = useState('Hazır mısın?');

  const handlePress = () => {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    setSuggestion(random);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="mb-6 font-[Poppins] text-3xl">Bugün Ne Yapalım?</Text>

      <Text className="mb-10 text-center font-[Poppins] text-xl">{suggestion}</Text>

      <Pressable onPress={handlePress} className="rounded-2xl bg-black px-8 py-4">
        <Text className="font-[Poppins] text-lg text-white">Ne Yapalım?</Text>
      </Pressable>
    </View>
  );
}
