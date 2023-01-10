const myCity = { // создание объекта с 3 свойствами и 3 значениями, порядок свойств не имеет значения
  city:'Syktyvkar',
  popular: true,
  country: 'Russia'
}


console.log(myCity.city)//точечная запись или дот нотейшон, используется для изменения свойств объекта или добавления новых(также добавлять можно за счёт['']=  )
myCity.republic ='Komi'//добавили republic
myCity['People'] = 250000//добавили people
console.log(myCity)


//для удаления свойств объекта используем delete
delete myCity.republic
console.log(myCity) //после удаления репаблик исчез
console.log(myCity.republic) //стал типом undefined

