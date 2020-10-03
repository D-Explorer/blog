const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConf')
module.exports = {
    title: '起不了床的夜猫子',
    description: '起不了床的夜猫子的 VuePress 文档',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
     ],
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: navConf,
    },


  }
