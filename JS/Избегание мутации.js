//вариант1
const person = {
  name: 'Igor',
  age:22
}
const person2 = Object.assign({}, person)
person2.age = 26
//console.log(person.age)
//console.log(person2.age)
//вариант2  
const man = {
  name: 'Igor',
  age:22
}
const man2 = { ...man}
man2.age = 26
//console.log(man.age)
//console.log(man2.age)
//но стоит помнить что мутации мы избегаем только для основных свойств, с вложенными свойствами это работать не будет

//вариант 3 - полностью избежим мутации, 

const chelovek = {
  name: 'Igor',
  age: 25
}

const chelovek2= JSON.parse(JSON.stringify(chelovek))
chelovek2.name = 'Katya'

console.log(chelovek.name)
console.log(chelovek2.name)
//ссылки на объекты не сохраняются, мы получаем полностью обособленную копию
