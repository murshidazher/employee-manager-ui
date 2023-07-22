/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "randomuser.me"],
  },
  transpilePackages: ["@murshidazher/employee-manager-ui"],
  redirects() {
    return [
      {
        source: "/employee",
        destination: "/employee/list",
        permanent: false,
      },
      {
        source: "/",
        destination: "/employee/list",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
