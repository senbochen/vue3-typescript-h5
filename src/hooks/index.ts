import dayjs from 'dayjs'
type Formatter = (timestamp: number | string, format: string) => string
const formatter = (timestamp: number | string, format: string) => dayjs(timestamp).format(format)


// 格式化日期
const useFormatDate: Formatter = (timestamp, format = 'YYYY-MM-DD') => formatter(timestamp, format)

// 格式化时分秒
const useFormatTime: Formatter = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => formatter(timestamp, format)

// 是今天的显示：'今天 HH:mm:ss'， 其他时间显示：'YYYY-MM-DD HH:mm:ss'
const useFormatTodayTime = (relativeTime: number): string => {
  const { $y: ty, $M: tm, $D: td } = dayjs(new Date())
  const { $y: y, $M: m, $D: d } = dayjs(relativeTime)
  const diffDay = dayjs(`${ty}-${tm + 1}-${td}`).diff(
    dayjs(`${y}-${m + 1}-${d}`),
    'day'
  )
  const pattern = diffDay ? 'YYYY-MM-DD HH:mm:ss' : '今天 HH:mm:ss'
  return dayjs(relativeTime).format(pattern)
}


export { useFormatDate, useFormatTime, useFormatTodayTime }
