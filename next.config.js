const { isReturnStatement } = require('typescript');

/**
 * for configs of next 
 * @type {import('next').NextConfig} 
 * */
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    const rule = {
      test: /\.(pdf)$/,
      // type: 'asset/resource',
      generator: {
        filename: 'static/[name].[ext]',
      },
      // loader: 'file-loader',
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/[name].[ext]'
          },
        }
      ]
    };
    config.module.rules.push( rule );
    return config;
  },
  reactStrictMode: true,
}
