let a = 5
let b = 8

function sum (a,b) {
  const c = a + b
//  console.log(c)
}

sum (a,b)

function myFn(d,f) {
  let g
  d = d + 1
  g = d + f
  return g
}

x =myFn(10, 3)
console.log(x)
// Если функция не return значение, значит она вернёт  undefined
console.dir(myFn)
