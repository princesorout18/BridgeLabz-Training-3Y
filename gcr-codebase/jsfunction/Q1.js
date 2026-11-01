function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log("Hello " + name);

    // Calling the callback function
    callback();
}

greetUser("Prince", showEndMessage);