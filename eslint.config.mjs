import { defineConfig } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '.expo/*',
      'build/*',
      'web-build/*',
      'expo-env.d.ts',
      '*.d.ts',
      '.next/*',
      'out/*',
      'coverage/*',
    ],
  },
])
