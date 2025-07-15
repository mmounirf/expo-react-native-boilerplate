import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";

export default defineConfig([
	expoConfig,
	{
		ignores: [
			"dist/*",
			"node_modules/*",
			".expo/*",
			"build/*",
			"web-build/*",
			"expo-env.d.ts",
			"*.d.ts",
			".next/*",
			"out/*",
			"coverage/*",
		],
	},
]);
