//пример

const value = 11
//выражение инструкция
value //условие
  ? console.log('Условие истинно') //выражение при истинном условии
  : console.log('Условие ложно') //выражение при ложном условии

//пример 2
// const value2_1 = 10
// const value2_2 = 20

// value2_1 && value2_2
//   ? myFunction1(value2_1,value2_2)
//   : myFunction2


//пример 3

let value3_1 = 11
console.log(value3_1 >=0 
  ? value3_1 
  : -value3_1
  )

let value3_2 = -5
const res = value3_2 >= 0
  ? value3_2
  : -value3_2
console.log(res)