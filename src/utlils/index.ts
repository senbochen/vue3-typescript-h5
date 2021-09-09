const { name } = require('../../package.json')

export const getGlobal = (): any => {
  return typeof window !== 'undefined' ? window : global
}

const global = getGlobal()
const storagePrefix = `kf-${name}-`

// 向本地存数据
export function setStorage(
  key: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: any,
  type = 'sessionStorage',
): void {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  global[type].setItem(`${storagePrefix}${key}`, data)
}

// 取本地数据
export function getStorage(
  key: string,
  type = 'sessionStorage',
): string | null {
  return global[type].getItem(`${storagePrefix}${key}`) || null
}

// 删除本地数据
export function deleteStorage(key: string, type = 'sessionStorage'): void {
  global[type].removeItem(`${storagePrefix}${key}`)
}

// 获取随机数
export const getRandom = (length: number): string => {
  let res = ''
  const randomMap = '0123456789abcdef'
  const randomMapLength = randomMap.length
  for (let j = 0; j < length; j++) {
    const randomNumber = Math.floor(Math.random() * (randomMapLength - 1)) + 1
    res += randomMap[randomNumber - 1]
  }
  return res
}



// 获取系统信息
export function getOsVersion() {
  const u = navigator.userAgent.toLowerCase()
  let version = ''
  if (u.indexOf('mac os x') > -1) {
    if (u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1) {
      // ios
      const regStr_saf = /os [\d._]*/gi
      const verinfo = u.match(regStr_saf)
      version = 'IOS ' + (verinfo + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
    } else {
      const regStr_saf = /mac os x [\d._]*/gi
      const verinfo = u.match(regStr_saf)
      version = 'Mac OS ' + (verinfo + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
    }
  } else if (u.indexOf('android') > -1 ||
    u.indexOf('linux') > -1) {
    // android
    version = 'Android ' + u.substr(u.indexOf('android') + 8, u.indexOf(';', u.indexOf('android')) - u.indexOf('android') - 8)
  } else if (u.indexOf('bb10') > -1) {
    // 黑莓bb10系统
    version = 'blackberry ' + u.substr(u.indexOf('bb10') + 5, u.indexOf(';', u.indexOf('bb10')) - u.indexOf('bb10') - 5)
  } else if (u.indexOf('iemobile') > -1) {
    // windows phone
    version = 'winphone ' + u.substr(u.indexOf('iemobile') + 9, u.indexOf(';', u.indexOf('iemobile')) - u.indexOf('iemobile') - 9)
  }
  return version
}

// 手机号码隐藏
export const telephoneNumberHidden = (number: string | number): string => {
  if (typeof number === 'number') {
    number = number.toString()
  }
  return number.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}
