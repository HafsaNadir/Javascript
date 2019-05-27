class Product {
    constructor(name,price)
    {
        this.name=name
        this.price=price
    }
    display()
    {
        console.log(`Name of book is ${this.name}`)
        console.log(`Price is ${this.price}`)
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
        console.log(`Author of book is ${this.author}`)
    }
}

book = new Book("The sun and her flowers", "$5","Rupi Kaur")
book.display()