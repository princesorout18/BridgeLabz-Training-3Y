class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating product objects
let products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Mobile", 20000, "Electronics"),
    new Product(4, "Keyboard", 1200, "Accessories")
];

// Applying discount
products.forEach(product => product.applyDiscount());

// Filtering products with price greater than 1000
let filteredProducts = products.filter(product => product.price > 1000);

// Displaying products
filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});