// Глава - Обработка событий в JavaScript

//task 4.1
let p = document.getElementById('val').innerText
let btn = document.getElementById('btn')
btn.onclick = () => console.log(p);

//task 4.2
let inp = document.getElementById('val').value
let btn = document.getElementById('btn')
btn.onclick = () => console.log(inp);

//task 4.3
let div = document.getElementById('square')
div.onclick = () => div.setAttribute('style', 'opacity:0')

//task 4.4
let btn = document.getElementById('clicker')
btn.onclick = () => btn.innerText = +btn.innerText + 1

//task 4.5
let btn = document.getElementById("delete");
let ul = document.getElementById("points");
function last() {
	let la = ul.children[ul.children.length - 1]
	la.remove();
};
btn.onclick = last;

//task 4.6
let div = document.getElementById("square");
function mins() {
	let hei = parseInt(div.style.height);
	let res = hei / 100 * 10
	let res_m = hei - res
	div.style.height = res_m + "px"
	div.style.width = res_m + "px"
}
div.onclick = mins;

//task 4.7
let btn = document.querySelector('.copy')
function copy() {
	btn_c = document.createElement('button');
	btn_c.className = this.className
	btn_c.innerText = this.innerText
	document.body.append(btn_c);
}
btn.onclick = copy


//task 4.8
let p = document.querySelectorAll('p')
p.forEach(e => e.addEventListener('click', function Onclick() {
	e.innerText = +e.innerText + 1
}))

//task 4.9
let div1 = document.getElementById('div1'), div2 = document.getElementById('div2');
div1.childNodes.forEach(el => el.addEventListener('click', function () {
	div2.append(el)
}))
div2.childNodes.forEach(el => el.addEventListener('click', function () {
	div1.append(el)
}))
