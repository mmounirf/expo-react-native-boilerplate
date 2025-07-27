import { Link } from 'expo-router'
import { View } from 'react-native'
import { ThemeToggle } from '~/components/ThemeToggle'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { useAuth } from '~/context/AuthContext'

const HomeScreen = () => {
  const { session, signOut, isLoading } = useAuth()

  return (
    <View className="flex-1 items-center justify-center gap-5 bg-card p-6">
      <ThemeToggle />

      <Button variant="outline">
        <Text>Update</Text>
      </Button>
      <Text className="text-2xl font-bold text-foreground">User is</Text>
      <Text className="text-md 0 text-card-foreground">
        {session ? 'Signed In' : 'Signed Out'}
      </Text>

      <View className="flex gap-2">
        <Button
          variant="destructive"
          onPress={() => signOut()}
          disabled={isLoading}
        >
          <Text>Sign Out</Text>
        </Button>
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
      <Link href="/home" asChild>
        <Button variant="secondary" size="lg">
          <Text>Go Home</Text>
        </Button>
      </Link>
    </View>
  )
}

export default HomeScreen
