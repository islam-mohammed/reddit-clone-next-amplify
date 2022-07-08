/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["redditclonebucket135330-dev.s3.eu-west-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
