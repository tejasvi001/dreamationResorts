// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",
 reactStrictMode: true,
 images: {
  unoptimized: true,
 }
};
export default nextConfig;
