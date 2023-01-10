// при расширении класс, берётся родительский конструктор, по этому нет необходимости его создавать  
class NumberArray extends Array { //extends - расширяет указанный класс - Array
  sum() { 
    return this.reduce(function(el, acc) {
      return acc += el}, 0) //reduce проходит поэлементо по массиву, и пременяет к каждому элементу колбэк функцию(первый параметр), второе значение это начальное значение аккумулятора
  }
}

const myArray = new NumberArray(2,5,7)

console.log(myArray)
console.log(myArray.sum())