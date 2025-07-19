import { Switch, Text, View } from "react-native";
import { useColorScheme } from "~/lib/useColorScheme";

export default function HomeScreen() {
  const { setColorScheme, colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-black dark:text-white">
        Hello from index.tsx 👋
      </Text>
      <Text className="text-black dark:text-white">
        Current theme: {colorScheme}
      </Text>
      <Switch
        onValueChange={(isDark) => setColorScheme(isDark ? "dark" : "light")}
        value={colorScheme === "dark"}
      />
    </View>
  );
}
