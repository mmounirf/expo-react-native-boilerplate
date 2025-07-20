import * as SecureStore from 'expo-secure-store'
import { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, value)
      }
    } catch (e) {
      console.error('Local storage error:', e)
    }
  } else {
    if (value === null) {
      await SecureStore.deleteItemAsync(key)
    } else {
      await SecureStore.setItemAsync(key, value)
    }
  }
}

export function useSecureStore<T = string>(key: string) {
  const [state, setState] = useState<T | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        let raw: string | null = null
        if (Platform.OS === 'web') {
          raw = localStorage.getItem(key)
        } else {
          raw = await SecureStore.getItemAsync(key)
        }

        if (raw) {
          const parsed: T = JSON.parse(raw)
          setState(parsed)
        } else {
          setState(null)
        }
      } catch (e) {
        console.error(`Failed to load "${key}" from storage`, e)
        setState(null)
      }
    }
    load()
  }, [key])

  const updateState = useCallback(
    (value: T | null) => {
      setState(value)
      const stringified = value !== null ? JSON.stringify(value) : null
      void setStorageItemAsync(key, stringified)
    },
    [key]
  )

  return { state, setState: updateState }
}
