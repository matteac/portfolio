import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { mat } from "./src/mat";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    colors: {
      gray: {
        "50": "#f9f9f9",
        "100": "#a3a3a3",
        "200": "#8f8f8f",
        "300": "#6c6c6c",
        "400": "#595959",
        "500": "#454545",
        "600": "#333333",
        "700": "#2f2f2f",
        "800": "#202020",
        "900": "#1f1f1f",
      },
    },
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        custom: [mat],
      },
    }),
  ],
} satisfies Config;
