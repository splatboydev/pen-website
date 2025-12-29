// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mailObfuscation from "astro-mail-obfuscation";

export default defineConfig({
	experimental: {
		fonts: [
			{
				name: "Glacial Indifference",
				cssVariable: "--font-glacial",
				provider: "local",
				variants: [
					{
						src: ["./src/assets/fonts/GlacialIndifference-Regular.otf"],
						weight: 400,
					},
					{
						src: ["./src/assets/fonts/GlacialIndifference-Bold.otf"],
						weight: 700,
					},
				],
			},
			{
				name: "Montserrat",
				cssVariable: "--font-montserrat",
				provider: fontProviders.google(),
				weights: [700],
			},
		],
	},
	integrations: [mailObfuscation()],
});
