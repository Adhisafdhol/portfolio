// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindPreserveWhitespace: true,
	tailwindPreserveDuplicates: true,
	trailingComma: "all",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	useTabs: true,
	quoteProps: "as-needed",
	bracketSpacing: true,
	objectWrap: "preserve",
	bracketSameLine: true,
	printWidth: 80,
};

export default config;
