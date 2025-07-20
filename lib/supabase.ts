import 'react-native-url-polyfill/auto'
import { createClient, processLock } from '@supabase/supabase-js'
import { SecureStoreAdapter } from './SecureStoreAdapter'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      storage: SecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  }
)
