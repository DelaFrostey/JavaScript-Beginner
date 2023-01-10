//сумма денег на счетах
const bankAccounts = [
  {id:'1', cash: 242},
  {id:'2', cash: 2192},
  {id:'3', cash: 52312},
  {id:'4', cash: 10000},
]

const totalCash = bankAccounts.reduce(function(sum, currentAccount){
  return sum + currentAccount.cash
}, 0
)
console.log(totalCash)