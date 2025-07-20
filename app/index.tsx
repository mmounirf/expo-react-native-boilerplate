import { Link } from "expo-router";
import { Switch, Text, View } from "react-native";
import { useColorScheme } from "~/lib/useColorScheme";

const HomeScreen = () => {
  const { setColorScheme, colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white dark:bg-black">
      <View className="flex flex-row gap-2">
        <Link href="/login" className="p-2 rounded-md bg-blue-500 text-white">
          <Text>Go to Sign In</Text>
        </Link>
        <Link
          href="/register"
          className="p-2 rounded-md bg-blue-500 text-white"
        >
          <Text>Go to Sign Up</Text>
        </Link>
      </View>
      <Link href="/home" className="p-2 rounded-md bg-green-500 text-white">
        <Text>Go Home</Text>
      </Link>

      <Switch
        onValueChange={(isDark) => setColorScheme(isDark ? "dark" : "light")}
        value={colorScheme === "dark"}
      />
    </View>
  );
};

export default HomeScreen;
