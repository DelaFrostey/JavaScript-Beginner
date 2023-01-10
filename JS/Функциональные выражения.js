//объявленная функция
function myFn(a,b) {
  let c 
  a = a+1,
  c = a + b
  return c
}
console.log(myFn(10,9))
//функциональное выражение имени не имеет,оно АНОНИМНО, её нельзя использовать где угодно, и лучше его использовать в вызове другой функции или присваивать переменной
// function(a, b) {
//   let c 
//   a = a + 1,
//   c = a + b
//   return c
// }
// console.log(myFn(10,9))

//присваивание функционального выражения переменной
const myFunction = function(z, x) {
  let v
  z = z + 1,
  v = z + x
  return v
}
console.log(myFunction(5,3))

//использование функционального выражения в вызове другой функции
setTimeout(function() {
  console.log('Отложенное сообщение') 
}, 1000)