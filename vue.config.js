module.exports = {
  /* pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }, */
  publicPath: '/',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  css: {
    modules: true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader

      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
              remUnit: 75
            })
        ]
      }
    }
  },
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
}