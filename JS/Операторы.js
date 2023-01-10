let a
let b
a = 10
b = a
let c = a + b
console.log(c)  
//записи бывают префиксными, инфиксными, постфиксными
// typeof a
// a === b
// a++

//логические операторы не !  и &&    или ||

//Ложные значения false=false, 0=false, ''=false, undefined = false, null = false
//, проверить boolean() -> false

// console.log(typeof 10 ==='number')
// let isUndefined
// let abc = 123
// console.log(typeof isUndefined === "undefined")
// console.log(typeof abc)


//оператор не !
// !10     false
// !0      true
// !'abc'  false
// !''     true
// !undefined true

x = {}
console.log(typeof x)
console.log(!x)
console.log(!!x)

//операторы короткого замыкания && , ||

//&& если находит ложное даёт его
// || если находит истинный операнд
let z1 = 1
let x1 = 2
let c1 = 3
let v1 = 4
console.log(!z1||!x1||!c1)
