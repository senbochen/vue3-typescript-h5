export function validateType(target: any, type: string) {
  return Object.prototype.toString.call(target) === `[object ${type}]`
}


//获取随机数
export const getRandom = (length: number) => {
  let res = ''
  const randomMap = '0123456789abcdef'
  const randomMapLength = randomMap.length
  for (let j = 0; j < length; j++) {
    const randomNumber = Math.floor(Math.random() * (randomMapLength - 1)) + 1
    res += randomMap[randomNumber - 1]
  }
  return res
}


// 判断安卓和ios
export const getPlatform = (): string => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    return 'Android'
  } else if (isIOS) {
    return 'IOS'
  } else {
    return 'PC'
  }
}

//防抖函数
export function debounce(
  func: (...args: any) => void,
  delay = 500,
): (...args: any) => void {
  let timeout: any = null
  return function (this: any, ...args: any) {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 节流函数
export function throttle(
  func: (...args: any) => void,
  delay = 500,
): (...args: any) => void {
  let timeout: any = null
  return function (this: any, ...args: any) {
    if (timeout) {
      return
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timeout)
      timeout = null
    }, delay)
  }
}
