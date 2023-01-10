//стрелочная функция не имеет имени, но её можно присвоить переменной
const myFunction = (a,b) => {
  let c
  a = a + 1
  c = a + b
  return c
}
//console.log(myFunction(5,3))

//также стрелочную функцию можно вызвать в другой функции
setTimeout(()=> {
  console.log('Отложенное сообщение')
}, 1000)

//сокращение стрелочной записи
//(a,b) => a + b //фиг.скобки можно опустить если 1 выражение, также выпонится авторетёрн этого выражения

//также для входных параметров можно назначить значение по умолчанию, если их НЕ указали

// function multByfactor(value, multiplier = 1) {
//   return value * multiplier
// }
// console.log(multByfactor(10,2))
// console.log(multByfactor(5))

//та же функция но как присвоенное переменной mBF функциональное выражение
// const mBF = function(v,m=1) {
//   return v * m
// }
// console.log(mBF(10,2))

// Та же функция но в стрелочной записи
mBF = (value, multiplier = 1) => value * multiplier
console.log(mBF(10))

