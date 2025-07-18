import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: isDark ? "#000" : "#fff",
        }}
      >
        <StatusBar translucent animated style="auto" />
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
