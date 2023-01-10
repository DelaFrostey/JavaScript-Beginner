const userProfile = {
  name: 'Igor',
  age: 22,
  hasSignedAgreement: false,
}
//деструктуризация из объекта
const {name, age, hasSignedAgreement} = userProfile
//Таким синтаксисом мы объявляем новые переменные с теми же именами что и свойства у соответсвующего объекта, которые присвоят себе значения одноимённых свойств из объекта UserProfile
console.log(name)
console.log(hasSignedAgreement)


//деструктуризация из массива
const fruits = ['Orange', 'Apple']
const [fruitOne, fruitTwo] = fruits //новые переменные возьмут соответствующие индексу значения из массива
console.log(fruitOne)
console.log(fruitTwo)

