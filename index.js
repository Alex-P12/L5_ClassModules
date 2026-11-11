import {Delivery} from "./delivery.js"; //Импорт дочернего класса

const delivery1 = new Delivery("Тэхніка", 10000, false, "пр. Незалежнасці, 3 кв. 10");
const delivery2 = new Delivery("Ежа", 300, true, "вул. Калеснікава 2, кв. 9");

const deliverys = [delivery1, delivery2];

console.log("\n*Друк масіва*");
for (const j of deliverys)
{//Печать массива
    j.show();
    console.log("\n");
}