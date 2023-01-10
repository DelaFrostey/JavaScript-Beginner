function myFn1(a, b) {
  let c
  a = a + 1
  c = a + b
  return c
}

//console.log(myFn1(10,9))

//caмая короткая функция

function myFn2() {}

myFn2()//undefined


// мутирование внешнего объекта в функции, что КРАЙНЕ НЕ РЕКОМЕНДУЮТ
/* 
const personOne = {
  name:'BOBY',
  age:22
}
function increasePersonAge(person) { // функция мутирует внешний объект person
  person.age +=1
  return person
}
increasePersonAge(personOne) //передача объекта по ссылке
console.log(personOne.age)
*/



/*
//если мы хотим менять значения свойств объекта в функции и не допускать мутации то лучше создавать КОПИЮ и менять в ней 
const firstMan = {
  name:'Adam',
  age: 20
}

function increasePersonAge(person) { //персон является своего рода абстракцией
  const updatedMan = Object.assign({}, person)
  updatedMan.age += 1
  return updatedMan
}

const updatedFirstMan = increasePersonAge(firstMan)
console.log(firstMan.age)
console.log(updatedFirstMan.age)
*/

//callback функции
function anotherFunction() {} //эта кол бэк функция передаётся как аргумент в другую функцию

function fnWithCallback(callbackFunction) {
  callbackFunction()
}
fnWithCallback(anotherFunction)


//пример callback функции
function printMyName() {
  console.log('Igor')
}
console.log('Start')
setTimeout(printMyName, 2000)
/*Важно -
1)Называть функию исходя из задач
2)1 функция для 1 задачи
3)НЕ стоит изменять внешние относительно функции переменные
*/