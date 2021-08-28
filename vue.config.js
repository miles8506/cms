const path = require('path');
module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: '@/components',
        views: '@/views',
        assets: '@/assets'
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:5000',
          pathRewrite: { '^/api': '' },
          secure: false,
          changeOrigin: true
        }
      }
    }
  }
};
