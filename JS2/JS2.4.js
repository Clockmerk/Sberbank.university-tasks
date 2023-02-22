// Глава - Контекст и this

// task 4.1
pet_1 = {
  name: "Шарик",
  age: 10
};

pet_2 = {
  name: "Жучка",
  age: 5
};

function getName() {
  return (`${this.name} ${this.age}`);
}
console.log(getName.call(pet_1) + "; " + getName.call(pet_2));

// task 4.2
input = {
  id: 1,
  value: "Добрый вечер",
  firstName: "Григорий",
  lastName: "Стрельников"
}

function sayHi() {
  console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}
sayHi.call(input)

// task 4.3
pet = {
  "name": "Локи",
  "breed": "Лайка"
};
getDescription = function () {
  return ("Имя питомца: " + this.name + ", Порода: " + this.breed)
}
console.log(getDescription.call(pet))

// task 4.4
props = {
  name: "Анатолий",
  age: 29,
  sayHi: () => "привет"
}
for (let k in props) {
  if (typeof props[k] == 'function') {
    delete props[k]
  }
}
k = ''
for (let l in props) {
  k += (l + ': ' + props[l] + ', ')
}
new_k = k.slice(0, k.length - 2)
console.log('Значения свойств объекта props (' + new_k + ')')

// task 4.5
hero = {
  nick: "FirstHero",
  position: "Лагерь",
  getPosition: function () {
    console.log("Позиция героя: " + this.position);
  }
};
hero.getPosition()