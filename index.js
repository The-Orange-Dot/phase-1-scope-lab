var customerName = "bob"

upperCaseCustomerName = () => customerName = customerName.toUpperCase()

function setBestCustomer() {
  bestCustomer = "not bob"
  setBestCustomer
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob"
}

const LeastFavoriteCustomer = "Sam"

function changeLeastFavoriteCustomer() {
  LeastFavoriteCustomer = "bob"
}