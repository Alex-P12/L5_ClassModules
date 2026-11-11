export class Order
{
    //Закрытые поля
    #name;
    #price;
    #status;
    #deleted = false;

    constructor(Name, Price, Status)
    {//Конструктор с параметрами
        this.#name = Name;
        this.#price = Price;
        this.#status = Status;
    }

    //Сеттры и геттеры
    set SetName(value)
    {
        this.#name = value;
    }
    get GetName()
    {
        return this.#name;
    }

    set SetPrice(value)
    {
        if (value < 1)
        {
            throw new Error("Кошт не станоўчы!");
        }

        this.#price = value;
    }
    get GetPrice()
    {
        return this.#price;
    }

    set SetStatus(value)
    {
        this.#status = value;
    }
    get GetStatus()
    {
        return this.#status;
    }

    show()
    {//Метод печати экземпляра класса
        if (this.#deleted == true)
        {
            throw new Error("Экзэмпляр выдалены!");
        }

        console.log("Назва: ", this.#name);
        console.log("Кошт: ", this.#price);
        console.log("Статус: ", this.#status);
    }
    delete()
    {//Метод удаления экземпляра класса
        this.#deleted = true;
        console.log("Экзэмпляр замовы выдален");
    }
    copy()
    {//Метод создания ссылки на экземпляр класса
        if (this.#deleted == true)
        {
            throw new Error("Экзэмпляр выдалены!");
        }

        return this;
    }
    static clone(order)
    {//Статический метод создания нового экземпляра
        return new this(order.GetName, order.GetPrice, order.GetStatus);
    }

    #OrderComplete()
    {//Условно-приватный метод
        this.#status = true;
    }
    OrderComplete()
    {//Публичный метод вызоа условно-приватного
        if (this.#deleted == true)
        {
            throw new Error("Экзэмпляр выдалены!");
        }

        this.#OrderComplete();
    }
}