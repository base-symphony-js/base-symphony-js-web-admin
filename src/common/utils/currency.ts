export const formatterCurrency = (value = 0, currency = 'L') => {
  return `${currency} ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

export const formatterCurrencyNumber = (value = 0) => {
  const amount = new Intl.NumberFormat('en-US').format(value)
  return amount
}
