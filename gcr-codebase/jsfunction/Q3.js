// Using arrow function
let user = {
    name: "Prince",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Using normal function
let user2 = {
    name: "Prince",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();