import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function RegisterScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white dark:bg-black">
      <Text className="text-2xl font-bold">Register Screen</Text>

      <Link
        href="/login"
        className="rounded-md bg-blue-500 p-2 text-white"
        replace
      >
        Login instead
      </Link>
    </View>
  )
}
