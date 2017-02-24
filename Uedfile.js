'use strict'

const PageLocalPlugin = require('@173/ued-cli-page-local')
const pkg = require('./package.json')

module.exports = function(config, activate) {
  //// static-site 插件负责静态网站的生成，通过 activate 函数来启用
  activate(PageLocalPlugin, {
    // 预览服务器的 SVN 地址
    previewSvnUrl: 'http://10.5.17.181/svn/ued-page.local.17173.com'
    // 预览服务器的 SVN 托管路径
  , previewProjectPath: pkg['ued.previewPath']
  })

  Object.assign(config, {
    // CDN 服务器的 SVN 路径
    projectPath: pkg['ued.cdnPath']
    // 项目标题
  , name: '标题'
    // CDN 服务器的 SVN 地址
  , svnUrl: 'http://10.5.17.181/svn/ued-ue.17173cdn.com'
  })
}
