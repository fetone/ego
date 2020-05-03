module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', // 要请求的后台地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      },
      '/product_api': {
        target: 'http://121.42.14.194:9011', // 要请求的后台地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/product_api': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      },
      '/content_api': {
        target: 'http://121.42.14.194:9021', // 要请求的后台地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/content_api': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      },
      '/shop_api': {
        target: 'http://nideshop.bluej.cn/api/', // 要请求的后台地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/shop_api': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        }
      }
    }
  }
}
