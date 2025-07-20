import { Link } from 'expo-router'
import { Button, Switch, Text, View } from 'react-native'
import { useSecureStore } from '~/hooks/useSecureStore'
import { useColorScheme } from '~/lib/useColorScheme'

type StoreType = {
  id: string
  payload: string
}

const HomeScreen = () => {
  const { setColorScheme, colorScheme } = useColorScheme()

  const { state, setState } = useSecureStore<StoreType>('testSecureStore')

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-white dark:bg-black">
      <Text className="text-2xl font-bold">State value is</Text>
      <Text className="text-md text-slate-600">
        {state?.payload ?? 'EMPTY'}
      </Text>
      <Button
        title="Update State"
        onPress={() =>
          setState({
            id: 'newId',
            payload: 'This is securely stored and encryped value',
          })
        }
      />
      <Button title="Remove State" onPress={() => setState(null)} />
      <View className="flex flex-row gap-2">
        <Link href="/login" className="rounded-md bg-blue-500 p-2 text-white">
          <Text>Go to Sign In</Text>
        </Link>
        <Link
          href="/register"
          className="rounded-md bg-blue-500 p-2 text-white"
        >
          <Text>Go to Sign Up</Text>
        </Link>
      </View>
      <Link href="/home" className="rounded-md bg-green-500 p-2 text-white">
        <Text>Go Home</Text>
      </Link>

      <Switch
        onValueChange={(isDark) => setColorScheme(isDark ? 'dark' : 'light')}
        value={colorScheme === 'dark'}
      />
    </View>
  )
}

export default HomeScreen
