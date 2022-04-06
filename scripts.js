console.log('--JS--');

//Все это надо обязательно прописывать в console, точно все отобразится!
const idOne = document.getElementById('one');
console.log(idOne.innerText);
console.log(idOne.innerHTML);

const titles = document.getElementsByTagName('h2');

console.log(titles);

console.log(titles[0]);
const peremennaja = document.gtElementsByClassName('subtitle');
console.log(peremennaja);

//Можно коллекцию переделать в массив! Проверить написание в console
for (let i = 0; i < titles.length; i++) {
   console.log(titles [i]);
}
// let arr = [...htmlCollection];
console.log([...titles]);

console.log(Array.from(titles));

const arr = Array.from(titles);

console.log(arr);
let b = [...titles].map(el => el.innerText);
console.log(b);
let i = 10;

function plusOne() {
    // alert(i++);
    console.log(i++);
}

// function plusOne(){
//     // console.log(1);
//     alert("Все работает!");
// }

function minusOne() {
    console.log(--i);
}


