import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#F6F2EC",
        green: "#4E7A51",
        black: "#121212",
        "my-blue": "#4A6FA5",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
