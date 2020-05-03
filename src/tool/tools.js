export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}
export const formartTime = (time) => {
  // 2.得到两个时间之间的差值(秒)
  const differSecond = time
  // 3.利用相差的总秒数 / 每一天的秒数 = 相差的天数
  let day = Math.floor(differSecond / (60 * 60 * 24))
  day = day >= 10 ? day : '0' + day
  // 4.利用相差的总秒数 / 小时 % 24;
  let hour = Math.floor(differSecond / (60 * 60) % 24)
  hour = hour >= 10 ? hour : '0' + hour
  // 5.利用相差的总秒数 / 分钟 % 60;
  let minute = Math.floor(differSecond / 60 % 60)
  minute = minute >= 10 ? minute : '0' + minute
  // 6.利用相差的总秒数 % 秒数
  let second = Math.floor(differSecond % 60)
  second = second >= 10 ? second : '0' + second
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}
export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}
export const removeLocalStorage = (key) => {
  return window.localStorage.removeItem(key)
}
export const clearLocalStorage = () => {
  return window.localStorage.clear()
}
export const addCookie = (key, value, day, path, domain) => {
  // 1.处理默认保存的路径
  // if(!path){
  //     var index = window.location.pathname.lastIndexOf("/")
  //     var currentPath = window.location.pathname.slice(0, index);
  //     path = currentPath;
  // }
  var index = window.location.pathname.lastIndexOf('/')
  var currentPath = window.location.pathname.slice(0, index)
  path = path || currentPath
  // 2.处理默认保存的domain
  domain = domain || document.domain
  // 3.处理默认的过期时间
  if (!day) {
    document.cookie = key + '=' + value + ';path=' + path + ';domain=' + domain + ';'
  } else {
    var date = new Date()
    date.setDate(date.getDate() + day)
    document.cookie = key + '=' + value + ';expires=' + date.toGMTString() + ';path=' + path + ';domain=' + domain + ';'
  }
}
export const getCookie = (key) => {
  // console.log(document.cookie);
  var res = document.cookie.split(';')
  // console.log(res);
  for (var i = 0; i < res.length; i++) {
    // console.log(res[i]);
    var temp = res[i].split('=')
    // console.log(temp);
    if (temp[0].trim() === key) {
      return temp[1]
    }
  }
}
export const delCookie = (key, path) => {
  addCookie(key, getCookie(key), -1, path)
}
