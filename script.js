const transactionsEl = document.querySelector('.transactions')

// remove transaction item visually
const handleClick = e => {
  e.target.parentElement.remove()
}

transactionsEl.addEventListener('click', handleClick)
