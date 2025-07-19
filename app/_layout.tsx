import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white dark:bg-black">
        <StatusBar translucent animated style="auto" />
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
