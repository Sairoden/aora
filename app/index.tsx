import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl text-blue-500 font-pblack">Aora!</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
}
