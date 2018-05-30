// p1 is promise object
var p1 = new Promise(function(resolve, reject) {
    resolve([1,2,3,4]);
});
//handling resolve
p1.then(function(data) {
    console.log("Promise p1 resolved with data:", data);
})
//handling rejection
.catch(function(data) {
    console.log("Promise p1 rejected with data:", data);
});
