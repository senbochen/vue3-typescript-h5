
// 防抖
export const debounce = (fn: (...args: any) => void, delay: number) => {
  let timer: any = null
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
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
