btnSubmitTax.onclick=function(){
  let income = inptIncome.value
  if (income < 30000) {
    lblTax.value = `With your income of $${income}, you are in a tax bracket of 8%`
  } else if (income < 99999) {
    lblTax.value = `With your income of $${income}, you are in a tax bracket of 15%`
  } else if (income >= 99999) {
    lblTax.value = `With your income of $${income}, you are in a tax bracket of 25%`
  }
}

btnResetTax.onclick=function(){
  inptIncome.value = ''
  lblTax.value = ''
}
