import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text>This is the Home screen for logged-in users</Text>
    </View>
  );
}
