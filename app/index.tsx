import { Appearance, Switch, Text, useColorScheme, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-black dark:text-white">
        Hello from index.tsx 👋
      </Text>
      <Text className="text-black dark:text-white">
        Current theme: {colorScheme}
      </Text>
      <Switch
        onValueChange={(isDark) =>
          Appearance.setColorScheme(isDark ? "dark" : "light")
        }
        value={colorScheme === "dark"}
      />
    </View>
  );
}
