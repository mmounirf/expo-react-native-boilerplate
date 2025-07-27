import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Text } from '~/components/ui/text'
import { supabase } from '~/lib/supabase'

type FormValues = {
  email: string
  password: string
}

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    setIsLoading(true)
    // TODO: handle invalid credentials error with alert dialog or toast
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setIsLoading(false)
  }

  return (
    <View className="p-view flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent className="native:gap-2 gap-4">
          <View className="gap-1">
            <Label nativeID="name">Email</Label>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  keyboardType="email-address"
                  aria-aria-labelledby="email"
                  placeholder="Your email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text className="text-destructive">Email is required.</Text>
            )}
          </View>
          <View className="gap-1">
            <Label nativeID="password">Password</Label>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  secureTextEntry
                  id="password"
                  placeholder="Your password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text className="text-destructive">Password is required.</Text>
            )}
          </View>
        </CardContent>
        <CardFooter>
          <Button
            disabled={isLoading}
            variant="default"
            className="w-full"
            onPress={handleSubmit(onSubmit)}
          >
            <View className="flex flex-row">
              <Text>Login</Text>
            </View>
          </Button>
        </CardFooter>
      </Card>
    </View>
  )
}
