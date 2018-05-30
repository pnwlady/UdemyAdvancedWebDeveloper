// p1 is promise object
var p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});
//handling resolve
p1.then(function(data) {
    console.log("Random int passed to resolve:", data);
});
