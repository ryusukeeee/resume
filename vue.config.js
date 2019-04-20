module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
  assetsDir: 'docs',
  outputDir: 'docs',
}