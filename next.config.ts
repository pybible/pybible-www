import type { NextConfig } from 'next';

const configuredNextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default configuredNextConfig;
