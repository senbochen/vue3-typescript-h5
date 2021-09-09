/**
 * @description 对于时间处理的方法
 */
import dayjs from 'dayjs'

/**
 * 格式化后的格式如下：
 * 今天： mm:ss
 * 昨天： 昨天 mm:ss
 * 其他  MM-DD mm:ss
 */
type FormatDate = {
  type: 'TODAY' | 'YESTERDAY' | 'AGO'
  formatDate: string
}

export const computerTime = (time?: number): string => {
  // const sendDate = 1620786249000
  // const sendDate = 1620618669000 //dangian
  const currentTime = new Date().getTime()
  if (!time) {
    return ''
  }

  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24

  const diff = currentTime - time

  if (diff < minute) {
    return '刚刚'
  } else if (diff < hour && diff >= minute) {
    return Math.floor(diff / minute) + '分钟前'
  } else if (diff < day && diff >= hour) {
    return Math.floor(diff / hour) + '小时前'
  } else if (diff < day * 2 && diff >= day) {
    return '昨天'
  } else if (diff < day * 3 && diff >= day * 2) {
    return '前天'
  } else {
    // console.log('时间戳')
    return dayjs(time).format('YYYY/MM/DD')
  }
}



export const formatQuickDate = (time: Date | number | string): FormatDate => {
  const date = dayjs(time)
  const nowDate = dayjs().startOf('date')
  // console.log(nowDate, '====now date ===')
  const diffHours = nowDate.diff(date, 'h')
  // console.log(diffHours, '====now diffHours ===')
  if (diffHours <= 0) {
    return {
      type: 'TODAY',
      formatDate: date.format('HH:mm'),
    }
  } else if (diffHours > 0 && diffHours <= 24) {
    return {
      type: 'YESTERDAY',
      formatDate: `昨天 ${date.format('HH:mm')}`,
    }
  } else {
    return {
      type: 'AGO',
      formatDate: date.format('MM-DD HH:mm'),
    }
  }
}
