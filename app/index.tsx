import { Link } from 'expo-router'
import { View } from 'react-native'
import { Button } from '~/components/button'
import { Text } from '~/components/text'
import { ThemeToggle } from '~/components/ThemeToggle'
import { useAuth } from '~/context/AuthContext'
import { useSecureStore } from '~/hooks/useSecureStore'

type StoreType = {
  id: string
  payload: string
}

const HomeScreen = () => {
  const { session } = useAuth()

  const { state, setState } = useSecureStore<StoreType>('testSecureStore')

  return (
    <View className="bg-card flex-1 items-center justify-center gap-5 p-6">
      <ThemeToggle />

      <Button variant="outline">
        <Text>Update</Text>
      </Button>
      <Text className="text-foreground text-2xl font-bold">User is</Text>
      <Text className="text-md 0 text-card-foreground">
        {session ? 'Signed In' : 'Signed Out'}
      </Text>

      <View className="flex gap-2">
        <Button variant="ghost">
          <Link href="/login">
            <Text>Go to Sign In</Text>
          </Link>
        </Button>

        <Button variant="destructive" size="sm">
          <Link href="/register">
            <Text>Go to Sign Up</Text>
          </Link>
        </Button>
      </View>
      <Link href="/register" asChild>
        <Button variant="secondary" size="lg">
          <Text>Go Home</Text>
        </Button>
      </Link>
    </View>
  )
}

export default HomeScreen
