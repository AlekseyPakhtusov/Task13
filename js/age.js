// Выведите на экран правильное сообщение, которое берет значение из input
// Написать скрипт в отдельном js файле.

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

// let showUserAge = showUser.bind(age);
// showUserAge('Pakhtusov', 'Aleksey');

//showUser.apply(age, ["Pakhtusov", "Aleksey"]);

