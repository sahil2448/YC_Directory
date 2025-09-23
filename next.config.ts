import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
        domains: ['via.placeholder.com', 'picsum.photos', 'images.unsplash.com'], // add what you use

    remotePatterns:[
      {
        
        protocol:'https',
        hostname:'*',
      }
      
    ]
  }
};

export default nextConfig;
