import type { Session } from '@supabase/supabase-js'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { useSecureStore } from '~/hooks/useSecureStore'
import { supabase } from '~/lib/supabase'

const AuthContext = createContext<{
  signIn: () => void
  signOut: () => void
  session: Session | null
  isLoading: boolean
} | null>(null)

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error('useAuth must be used within a <AuthProvider />')
  }
  return value
}

export function AuthProvider({ children }: PropsWithChildren) {
  const { setState, state } = useSecureStore<Session>('supabase.session')
  const [session, setSession] = useReducer(
    (_: Session | null, action: Session | null) => action,
    null
  )

  useEffect(() => {
    const restore = async () => {
      if (state) {
        const { data, error } = await supabase.auth.setSession(state)
        if (!error) {
          setSession(data.session)
        }
      }
    }
    restore()
  }, [state])

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session) {
          setSession(session)
          setState(session)
        } else {
          setSession(null)
          setState(null)
        }
      }
    )

    return () => subscription.subscription.unsubscribe()
  }, [setState])

  const signIn = async () => {
    await supabase.auth.signInWithOtp({ email: 'demo@example.com' })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, session, isLoading: false }}
    >
      {children}
    </AuthContext.Provider>
  )
}
