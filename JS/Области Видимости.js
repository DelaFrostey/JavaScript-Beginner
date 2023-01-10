/*
// глобальная область видимости
let a
let b
function myFn() {
  let b //локальная, т.е внутри функции
  a = true
  b = true
  console.log(b + ' локальная')
}
myFn()
console.log(a + ' глобальная ')
console.log(b + ' глобальная ')
*/

//вложенная  область видимости
/*
const a = 5

function myFn() {
  function innerFn() {
    console.log(a)
  }
  innerFn()
}
myFn() */

let a
let b
function myFn() {
  let b //b из этой области видимости функции, не глобальная
  a = true // так как мы не объявляли а, то произошла мутация глобальной переменной
  b = 10
  console.log(a)
}

myFn() // важно, что после выполнения функции, УДАЛЯЮТСЯ созданные в ней переменные и значения

console.log(a)
console.log(b) //тут выведется undefined