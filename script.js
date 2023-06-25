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
    const currentIncome = +numberIncomeEl.textContent
    const updatedIncome = currentIncome - amount
    numberIncomeEl.textContent = updatedIncome
  } else {
    const currentExpense = +numberExpesesEl.textContent
    const updatedExpense = currentExpense - amount * -1
    numberExpesesEl.textContent = updatedExpense
  }

  // Updade balance

  if (amount > 0) {
    const currentBalance = +balanceNumberEl.textContent
    const updatetBalance = currentBalance - amount
    balanceNumberEl.textContent = updatetBalance
  } else {
    const currentBalance = +balanceNumberEl.textContent
    const updatetBalance = currentBalance + amount * -1
    balanceNumberEl.textContent = updatetBalance
  }

  // Make red if balance negative
  balanceNumberEl.innerHTML < 0
    ? balanceNumberEl.classList.add('negative-balance')
    : balanceNumberEl.classList.remove('negative-balance')
}

const handleSubmit = e => {
  // Prevent form from default behaviour
  e.preventDefault()

  // Get input values
  const description = inputDescriptionEl.value
  const amount = +inputAmountEl.value

  // Create transaction item HTML
  let transaction = ''

  if (amount > 0) {
    transaction = `
        <li class="transaction transaction--income">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">+${amount}</span>
            <button class="transaction__btn">X</button>
        </li>`
  } else {
    transaction = `
        <li class="transaction transaction--expense">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">${amount}</span>
            <button class="transaction__btn">X</button>
        </li>`
  }

  // Clear input after submit
  inputDescriptionEl.value = ''
  inputAmountEl.value = ''

  // Unfocus (blur) form inputs
  inputDescriptionEl.blur()
  inputAmountEl.blur()

  // Increase income number
  if (amount > 0) {
    // let currentIncome = +numberIncomeEl.textContent
    // console.log(typeof numberExpesesEl.textContent)
    numberIncomeEl.textContent += amount

    // console.log(currentIncome, amount)
    // console.log(typeof currentIncome, typeof amount)

    // currentIncome += amount
    // console.log(currentIncome)
  }

  transactionsEl.insertAdjacentHTML('afterbegin', transaction)
}

transactionsEl.addEventListener('click', handleClick)
formEl.addEventListener('submit', handleSubmit)
