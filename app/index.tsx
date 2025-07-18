import { Appearance, Switch, Text, useColorScheme, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: isDark ? "white" : "black" }}>
        Hello from index.tsx 👋
      </Text>
      <Text style={{ color: isDark ? "white" : "black" }}>
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
