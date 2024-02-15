const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  reactStrictMode: true,
  "react/no-unescaped-entities": "off",
});

module.exports = nextConfig;
