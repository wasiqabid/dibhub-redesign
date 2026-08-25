import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // Lets any partial be imported as `@use 'default/variables' as *;`
    // instead of walking relative paths from wherever the file lives.
    includePaths: [path.join(__dirname, 'public/assets/scss')],
  },
};

export default nextConfig;
