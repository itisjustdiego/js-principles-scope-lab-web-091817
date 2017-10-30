customerName = 'bob'

function upperCaseCustomerName() {
 customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'initialValue'
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'change value'
  return leastFavoriteCustomer
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'ben'
  let favoriteCustomer = 'sherman'
}
