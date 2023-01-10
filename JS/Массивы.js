//Массив это объект и его свойства нумерованы и начинаются с 0
//способ 1
const myArray = [1, 2, 3]

//способ 2
const myArray2 = new Array(1, 2, 3)//создание путём присваивания нового экземпляра класса Array
//у массива есть автоматическое увелличение параметра lenght 
const myArray3 = [1, true, 'Bogdan']


//основные функции высшего порядка в массивах(также их называю как методы прототипов)
// push - добавляет элемент в конец массива
myArray.push(4)
myArray.push(true)

// pop - удаляет последний элемент массива, а так же ДАЁТ нам его значение
myArray.pop()
const deletedElem = myArray.pop()

// shift - удаляет первый элемент в начале массива, а также даёт нам его значение 
myArray.shift()

// unshift - добавляет элемент в начало массива
myArray.unshift(true)
myArray.unshift('abc')

//!shift unshift push pop мутируют массив НЕ создают его копию

// forEach - метод используемый для перебора массива, функция внутри исполнится столько раз, сколько элементов в массиве. Если присвоить значение метода вернёт он undefined
myArray2.forEach(el => console.log(el*2))
console.log(myArray2)

// map - метод для перебора массива, но в результате возвращает новый массив после применения функции указанной в скобках к каждому элементу массива

//упрощённая запись с неявным возвратом элемента(опустили () {} return )
const newArray = myArray2.map(el => el * 3)
console.log(newArray)
console.log(myArray2)

//тоже самое но с явным возвратом нового элемента маcсива
const newArray2 = myArray2.map((el) =>{
  return el * 3
})
console.log(newArray2)
console.log(myArray2)

// тоже самое но с анонимным функциональным выражением
const newArray3 = myArray2.map(function(el) {
  return el * 3
})
console.log(newArray3)
console.log(myArray2)
