// получим данные с удалённого сервера(исполнять в браузере, в vsc нет метода fetch)

fetch('https://jsonplaceholder.typicode.com/todos/1') //получаем промис
  .then(response => {
    console.log(response)
    return response.json()
  }) //метод json возвращает промис
  .then(json => console.log(json)) //вывод данных
  .catch(error => console.error(error)) // вернёт ошибку если один из промисов не вернёт результат