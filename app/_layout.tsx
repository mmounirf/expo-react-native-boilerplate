import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { NAV_THEME } from '~/lib/constants'

import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthProvider, useAuth } from '~/context/AuthContext'
import '~/global.css'
import { useColorScheme } from '~/lib/useColorScheme'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
}

function RootNavigator() {
  const { isDarkColorScheme } = useColorScheme()
  const { session } = useAuth()

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar translucent animated style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Protected guard={!session}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
        <Stack.Protected guard={!!session}>
          <Stack.Screen name="(app)" />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-background">
        <RootNavigator />
      </SafeAreaView>
    </AuthProvider>
  )
}
