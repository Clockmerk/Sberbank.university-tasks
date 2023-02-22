// Глава - строковые функции

// task 1.1
message = "ПРиветствую вас";

if (message.toLowerCase().includes("привет")) {
  console.log(true)
} else { console.log(false) }
//или
console.log((message.toLowerCase().includes("привет")) ? true : false)

// task 1.2
console.log(greetings.toLowerCase().lastIndexOf("username"));

// task 1.3
firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"

console.log((firstDiv.includes("</p> <p>")) || (firstDiv.includes("</p><p>")) || (firstDiv.includes("</p></p>")) ? true : false)

// task 1.4
road = "15.2 km"
console.log(Number((parseFloat(road) * 0.62).toFixed(1)))

// task 1.5
words = "Молоко"
splits = words.split(" ");

if (splits.length > 1) {
  console.log("В строке больше одного слова")
} else { console.log("В строке одно слово") }

// task 1.6
symbols = "12 стульев"

(symbols.codePointAt(0) > 47 && symbols.codePointAt(0) < 58) ? console.log("Первый символ цифра") : console.log("Первый символ не цифра")
//или
Number.isInteger(parseInt(symbols[0])) ? console.log("Первый символ цифра") : console.log("Первый символ не цифра")
//или
!isNaN(symbols[0]) ? console.log("Первый символ цифра") : console.log("Первый символ не цифра")
//или
Number(symbols[0]) ? console.log("Первый символ цифра") : console.log("Первый символ не цифра")

// task 1.7
symbols = "floor";
if ((symbols.codePointAt(0) + symbols.codePointAt(1)) % 2 == 0) {
  console.log(
    String.fromCodePoint(symbols.codePointAt(0) + symbols.codePointAt(1))
  );
} else {
  console.log("Символ обнаружить не удалось");
}

// task 1.8
phone = "+712:34567*8,90"
console.log(phone.replace(/[^\+\d]/g, ''));

// task 1.9
console.log(emails.split(" "))

// task 1.10
ticket = "SD-122345674573:RU"
let arr = ticket.match(/\d{8,12}/g)
arr1 = arr.join();
arr2 = arr1.split('')

if (arr2.length == 8) {
  console.log("Выбран билет на концерт");
} else if (arr2.length == 12) {
  console.log("Выбран билет в театр");
} else {
  console.log("Билет не определен");
}