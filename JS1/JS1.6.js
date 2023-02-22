// Глава - Функции

// task 6.1
function priceMessage(price) {
    console.log(`Данный товар стоит ${price} рублей`)
}
priceMessage(price)

// task 6.2
function mult(a, b) {
    console.log(a * b)
}
mult(num_1, num_2)

// task 6.3
let square = () => {
    return num * num
}
square()

// task 6.4
let res = ''
let numb = num
for (let i = 0; i < 3; i++) {
    res += numb * numb + " ";
    numb = numb * numb;
}
res = res.substring(0, res.length - 1)
console.log(res)

// task 6.5
function getNumber(data) {
    if (isNaN(parseFloat(data)) == true) {
        return 0
    } else return parseFloat(data)
}
console.log(getNumber(data))

// task 6.6
function getPercent(value, total) {
    return ((value * 100) / total)
}
console.log(getPercent(value, total))