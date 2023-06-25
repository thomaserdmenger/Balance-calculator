const transactionsEl = document.querySelector('.transactions')
const balanceNumberEl = document.querySelector('.balance-number')
const numberIncomeEl = document.querySelector('.number--income')
const numberExpesesEl = document.querySelector('.number--expenses')
const formEl = document.querySelector('.form')
const inputDescriptionEl = document.querySelector('.input--description')
const inputAmountEl = document.querySelector('.input--amount')

const handleClick = e => {
  // remove transaction item visually
  const clickedEl = e.target.parentElement
  clickedEl.remove()

  // Update income or expenses
  const amountEl = clickedEl.querySelector('.transaction__amount')
  const amount = +amountEl.textContent // Unery plus operator => converts string into number

  if (amount > 0) {
    numberIncomeEl.textContent -= amount
    // balanceNumberEl.textContent -= amount
  } else if (amount < 0) {
    numberExpesesEl.textContent -= amount * -1
    // balanceNumberEl.textContent -= amount
  }
}

transactionsEl.addEventListener('click', handleClick)
