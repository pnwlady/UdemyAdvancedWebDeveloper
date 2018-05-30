function square(n) {
    return n * n;
}

setTimeout(function() {
    console.log("Hello World");
}, 0);

console.log(square(2));

//returns
//4
//undefined
//Hello World
