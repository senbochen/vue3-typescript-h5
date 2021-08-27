
export interface State {
  count: number
  name: string
  activeTabName: string
  token: string
}

const state: State = {
  count: 2022,
  name: '今年是2021年',
  activeTabName: 'home',
  token: sessionStorage.getItem('token') || ''
}
export default state
