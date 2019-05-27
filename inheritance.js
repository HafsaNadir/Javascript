class Product {
    constructor(name,price)
    {
        this.name=name
        this.price=price
    }
    display()
    {
        console.log(`Name of book is ${this.name}`) //Name of book is the sun and her flowers
        console.log(`Price is ${this.price}`) //Price is $5
    }
}
class Book extends Product {
    constructor(name,price,author)
    {
        super(name,price)
        this.author=author
    }
    display()
    {
        super.display()
        console.log(`Author of book is ${this.author}`) //Author of book is rupi kaur
    }
}

book = new Book("The sun and her flowers", "$5","Rupi Kaur")
book.display()