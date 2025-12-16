import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { suggestions } from '@/src/data/suggestion'; // 👈 BURASI ÖNEMLİ

export default function HomeScreen() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const [suggestion, setSuggestion] = useState('Ne yapacağımızı seçelim ✨');

  const handlePress = () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    setSuggestion(suggestions[randomIndex]);
  };

  return (
    <View className="flex-1 bg-white px-5 pt-6">
      <StatusBar style="dark" />

      {/* HEADER */}
      <View className="mb-6">
        <Text className="font-[PoppinsBold] text-3xl">Today</Text>
        <Text className="mt-1 text-base text-gray-500">{today}</Text>
      </View>

      {/* MAIN CARD */}
      <View className="mb-8 min-h-[120px] justify-center rounded-2xl bg-[#F5F7FF] p-5">
        <Text className="text-center font-[PoppinsMedium] text-xl">{suggestion}</Text>
      </View>

      {/* MAIN BUTTON */}
      <Pressable onPress={handlePress} className="mb-8 items-center rounded-2xl bg-black py-4">
        <Text className="font-[PoppinsBold] text-lg text-white">Ne Yapalım?</Text>
      </Pressable>
    </View>
  );
}
