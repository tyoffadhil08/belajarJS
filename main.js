// console.log ("hello world")
// alert("Notifikasi")
// prompt("aglal cantik")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is not Easy"
// console.log(promnet)

// let promnet = "Coding is easy"
// console.log(promnet)
// promnet = "Coding is not easy"
// console.log(promnet)

// const Promnet = "Coding is easy"
// console.log(Promnet)
// promnet = "coding is not easy"
// console.log(promnet)

// let totalPoin = prompt("masukkan poin anda")
//     if(totalPoin >100){
//         document.write("<h1>Congrats<h1/>")
//     }
//     else{
//         document.write("<h1>Thanks<h1/>")
//     }

// let x =6;
// let y =3;

// console.log(x < 10 && y>1);
// console.log(x<10&&y<1);
// console.log(x<10&&y<1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));

// document.writeln(x < 10 && y>1);
// document.writeln(x<10&&y<1);
// document.writeln(x<10&&y<1);
// document.writeln(x==5||y==5);
// document.writeln(x==6||y==5);
// document.writeln(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerText = isi
// })

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

function addItem() {
    let value = inputBx.value.trim();
    if (value !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span>${value}</span><i></i>`;

        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
            updateTextDecoration(this);
        });

        listItem.querySelector("i").addEventListener("click", function(){
            listItem.remove();
        });

        list.appendChild(listItem);
        inputBx.value = "";
    }
}

function updateTextDecoration(item) {
    let textElement = item.querySelector('span');
    if (item.classList.contains('done')) {
        textElement.style.textDecoration = 'line-through';
    } else {
        textElement.style.textDecoration = 'none';
    }
}

inputBx.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem();
    }
});

const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");

     deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });
 listItem.appendChild(deleteButton);