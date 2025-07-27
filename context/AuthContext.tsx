import { Session } from '@supabase/supabase-js'
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { supabase } from '../lib/supabase'

type AuthContextType = {
  signOut: () => Promise<void>
  session: Session | null
}

const AuthContext = createContext<AuthContextType>({
  signOut: async () => {},
  session: null,
})

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null)

  // No need to hydrate session from storage here, Supabase does it automatically with our "SecureStoreAdapter"

  useEffect(() => {
    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, newSession) => {
      setSession(newSession)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    // Supabase will automatically clear stored session and fire SIGNED_OUT event
  }, [])

  const value: AuthContextType = {
    session,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
