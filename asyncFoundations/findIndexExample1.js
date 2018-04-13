function findIndex(array, callback) {
    //find index code to be implemented
}

function callback(curElement, curIndex, array) {
    //callback implemented by caller of function
}

var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
    return num === 6;
});
//this value will be truthy when the index value is equal to 6

var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
    return num % 2 === 0;
});
//will return the truthy values indecies (would it return more then 1?)

var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, array) {
    return lang === "JavaScript";
});

//bad example - not return value
var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, array) {
    lang === "JavaScript";
});
