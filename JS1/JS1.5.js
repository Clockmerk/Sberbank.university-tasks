// Глава - Циклы

// task 5.1
res = 0
for (let i = 0; i <= end; i++) {
    if (i % 5 == 0) {
        res += i
    }
}
console.log(res)

// task 5.2
res = ''
for (let i=word.length; i>0; i--) {
  res+= word[i - 1]
}
console.log(res)

// task 5.3
res = ''
for (let i=word.length; i>0; i--) {
  res+= word[i - 1]
}
console.log(res.toLowerCase() == word.toLowerCase() ? "Слово является палиндромом!" : "Слово не является палиндромом!")
