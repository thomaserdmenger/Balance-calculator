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
  } else {
    numberExpesesEl.textContent -= amount * -1
  }

  // Updade balance
  if (amount > 0) {
    balanceNumberEl.textContent -= amount
  } else {
    balanceNumberEl.textContent -= amount
  }

  // Make red if balance negative
  balanceNumberEl.innerHTML < 0
    ? balanceNumberEl.classList.add('negative-balance')
    : balanceNumberEl.classList.remove('negative-balance')
}

transactionsEl.addEventListener('click', handleClick)
