import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import '../global.css'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

function RootNavigator() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <StatusBar translucent animated style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </SafeAreaView>
  )
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  )
}
