/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  printWidth: 100,
};

module.exports = config;
