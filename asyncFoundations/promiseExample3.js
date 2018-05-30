// p1 is promise object
var p1 = new Promise(function(resolve, reject) {
    var num = Math.random();
    if (num < 0.5) {
        resolve(num);
    } else {
        reject(sum);
    }
});
//handling resolve
p1.then(function(result) {
    console.log("Success:", result);
})
//handling rejection
.catch(function(error) {
    console.log("Error:", error);
});
