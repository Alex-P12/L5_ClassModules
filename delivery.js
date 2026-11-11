import {Order} from "./order.js"; //Импорт класса

export class Delivery extends Order
{
    //Закрытое поле
    #address;

    constructor(Name, Price, Status, Adress)
    {//Конструктор с параметрами
        super(Name, Price, Status);
        this.#address = Adress;
    }

    //Сеттер и геттер
    set SetAddress(value)
    {
        this.#address = value;
    }
    get GetAddress()
    {
        return this.#address;
    }

    show()
    {//Метод печати экземпляра класса
        super.show();
        console.log("Адрас дастаўкі: ", this.#address);
    }
    static clone(delivery)
    {//Статический метод создания нового экземпляра
        return new Delivery
        {
            delivery.GetName,
            delivery.Getrice,
            delivery.GetStatus,
            delivery.GetAddress
        };
    }
}