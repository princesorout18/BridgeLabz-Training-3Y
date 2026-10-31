class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(coupon) {
        let pattern = /^(SAVE|DISC)(10|20)$/;

        if (pattern.test(coupon)) {
            let discount = Number(coupon.match(/\d+/)[0]);

            let total = this.getTotal();
            let finalTotal = total - (total * discount / 100);

            console.log("Original Total: ₹" + total);
            console.log("Discount: " + discount + "%");
            console.log("Final Total: ₹" + finalTotal);
        } else {
            console.log("Invalid Coupon Code");
        }
    }
}

// Creating cart
let cart = new Cart();

// Adding items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart total
console.log("Cart Total: ₹" + cart.getTotal());

// Applying coupon
cart.applyCoupon("SAVE20");