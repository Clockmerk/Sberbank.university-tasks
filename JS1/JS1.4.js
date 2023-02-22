// Глава - Условный оператор

// task 4.1
if (speed >= 0 && speed <= 30) {
    console.log("Вы едете слишком медленно")
} else if (speed >= 31 && speed <= 70) {
    console.log("Вы едете с нормальной скоростью")
} else console.log("Вы едете слишком быстро, сбавьте скорость")

// task 4.2
if (isNaN(parseInt(price)) == true) {
    console.log('Не число')
} else if (parseInt(price) <= 0) {
    console.log("Число не корректное")
} else console.log(parseInt(price))

// task 4.3
let arr = []
arr.push(a, b, c)
max = arr.reduce(function (a, b) {
    return a > b ? a : b
})
console.log(max)

// task 4.4
if (temp >= 25 && weather == "clear") {
    activity = 'golf'
} else if ((temp > 10 && temp < 24) && weather == "clear") {
    activity = "bowling"
} else activity = "hiking"

// task 4.5
console.log(word_1.length > word_2.length ? word_1 : word_2);

// task 4.6
switch(task) {
    case "удалить":
        console.log("delete");
        break;
    case "переименовать":
        console.log("rename");
        break;
    case "редактировать":
        console.log("edit");
        break;
}

// task 4.7
switch(sign) {
    case "day":
        console.log(`${price} Р в день`);
        break;
    case "week":
        console.log(`${price} Р в неделю`);
        break;
    case "month":
        console.log(`${price} Р в месяц`);
        break;
}

// task 4.8
switch(sign) {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
}


// task 4.9
switch(sign) {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(b == 0 ? "Делить на 0 нельзя!" : a/b);
        break;
}
