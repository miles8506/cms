const path = require('path'); //想要使用node.js的require方式

module.exports = {
  publicPath: './',
  // //使用configureWebpack方式，是會在compiler時與webpack一起合併
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: '@/components',
        views: '@/views',
        assets: '@/assets'
      }
    }
  }
};
