const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConf')
module.exports = {
    title: '起不了床的夜猫子',
    description: '起不了床的夜猫子的 VuePress 文档',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] //favicon.ico 图标要放在 pulic 文件夹下面
      ],
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '上次更新',
        nav: navConf,
    },


  }
