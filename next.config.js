/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export', // 静的エクスポートを有効化
  distDir: 'build', // 出力フォルダを指定
  assetPrefix: isProd ? './' : '', // 本番環境で相対パスを使用
  trailingSlash: true, // URL末尾にスラッシュを追加
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }] // required to make pdfjs work
    return config
  },
}

module.exports = nextConfig
