import type { SupportedStorage } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'

export const SecureStoreAdapter: SupportedStorage = {
  getItem: async (key: string) => {
    const result = await SecureStore.getItemAsync(key)
    return result
  },
  setItem: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
  },
  removeItem: async (key: string) => {
    await SecureStore.deleteItemAsync(key)
  },
}
