import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white dark:bg-black">
      <Text className="text-2xl font-bold">Login Screen</Text>

      <Link
        href="/register"
        className="rounded-md bg-blue-500 p-2 text-white"
        replace
      >
        Register new account
      </Link>
    </View>
  )
}
