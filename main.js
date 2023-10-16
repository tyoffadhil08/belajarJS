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

document.addEventListener("DOMContentLoaded", function() {
    const input8x = document.querySelector('#input8x');
    const list = document.querySelector('#list');

    input8x.addEventListener("keyup", function(event) {
        if (event.key === "Enter" && this.value.trim() !== "") {
            addItem(this.value.trim());
            this.value = "";
        }
    });

    function addItem(task) {
        const listItem = document.createElement("li");
        listItem.innerHTML = task; // Menggunakan innerHTML untuk merender format HTML

        listItem.addEventListener("click", function() {
            this.classList.toggle('done');
        });

        const deleteButton = document.createElement("i");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "&#10006";
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
});


listItem.addEventListener("click", function(){
    this.classList.toggle('done');
});

function addItem(task) {
    let listItem = document.createElement("li");
    const parsedTask = parseHTML(task); // Menambahkan fungsi parseHTML

    listItem.appendChild(parsedTask);
    list.appendChild(listItem);
}
