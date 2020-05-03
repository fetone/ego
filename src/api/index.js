// 这个文件专门用于管理各种请求接口地址的
import Network from './network-sxt'

// 验证登录,获取token
export const validateLogin = (data) => Network.post('/api/login', data)

// 商品列表地址
export const getProductList = () => Network.get('shop_api/index/index')
