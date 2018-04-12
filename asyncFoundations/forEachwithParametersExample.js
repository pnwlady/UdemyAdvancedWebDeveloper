//example with all parameters used
let strings = ["my", "forEach", "example"];

let result = "";
forEach(strings, function(str, index, array) {
    if (array.length - 1 !== index) {
        result += str + " ";
    } else {
        result += str + "!!!";
    }
});

//to run in console define forEach
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
