// 將時間轉換為小時跟分鐘
const calcTime = (time) => {
  const hours = Math.floor(time / 60)
  const mins = time % 60
  return `${hours}h ${mins}m`
}
// 將數字轉換成貨幣格式
const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  return formatter.format(money)
}

// 將狀態持久化
const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}

export { calcTime, convertMoney, isPersistedState }
