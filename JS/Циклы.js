//виды циклов, все циклы это инструкции
// for (Начальная инструкция; Условие; Итерационное действие)
// for  in
// while
// do while
// for of

// for (let i = 0; i<5; i++) {
//   console.log(i)
// }

//переберём массив с помощью for (но лучше использовать метод array.forEach или map)

const myArray = [1, 2, 3]

for( let i = 0; i<myArray.length; i++) {
  console.log(myArray[i])
}

//рекомендуемый перебор массива через forEach
const myArray2 = ['winter', 'spring', 'summer', 'autumn']
myArray2.forEach((element,index) => {
  console.log(element,index)
})

//цикл while - выполняется пока условие правдиво, основное отличие в том, итерационное действие происходит внутри цикл.  Если такое условие не создать, то цикл будет бесконечным
let i = 0
while (i < 5) {
  console.log(i)
  i++ 
}

//цикл do while, ключевое отл- такой блок кода выполняется как минимум 1 раз всегда 
let a = 0
do {
  console.log(a)
  a++
} while (a < 5)

//цикл for in, гдe key - название свойства объекта object
for (key in Object) {
  //действие с каждым свойством объекта
  //получить значения свойства - Object[key]
}

//переберём свойства объекта
const myObject = {
  x: 1,
  y: 2,
  z: 3,
}
for (const key in myObject) {
  console.log(key, myObject[key])
}

//используя forEach для объекта, можно получить его свойства в виде массива
const myObject2 = {
  a: 1,
  b: 2,
  c: 3
}

Object.keys(myObject2).forEach(key => { //передаём колбэк функцию с параметром  key
  console.log(key, myObject2[key])
})
//также можно перебирать не свойства и значения, а сразу значения свойств объекта используя .values и таким образом превращать объект в МАССИВ

Object.values(myObject).forEach(value => { 
  console.log(value)
})

//цикл for of

//for (Element of Iterable) //перебор символов при каждой итерации\
const myString = 'Igor'
for (const letter of myString) {
  console.log(letter)
}

//for of для массивов, его НЕЛЬЗЯ использовать для объектов, так как порядок свойств объектов неважен, for of не понимает как перебирать свойства
const myArray1 = [true, 10, 'igor']
for (const element of myArray1) {
  console.log(element)
}

//лучший метод перебора  массива используя forEach (также map, indexof)

myArray1.forEach(element => {
  console.log(element)
})