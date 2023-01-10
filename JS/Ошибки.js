/* блок try catch используется для ловли ошибки в фрагменте кода
 и продолжения выполнения кода до конца */
const fnWithError = () => {
  throw new Error('Some error')
}

try { 
  fnWithError()
} catch (error) {//в случае возникновения ошибки ловим её и выполняем следующее -
  console.error(error)//выведем полностью ошибку в консоль
  console.log(error.message)// выведем только сообщение об ошибке
}

console.log('Continue...')