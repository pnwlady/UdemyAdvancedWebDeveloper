//Quiz: make findIndex
function findIndex(array, callback) {
    //if there is an index == truthy, if answer is -1 == then return falsey
    if (curIndex) {
        return truthy;
    } else if (-1) {
        return falsey;
    }
}

function callback(curElement, curIndex, array) {
    //iterate through array until curElement is found, return curIndex, or -1
    for(var i = 0; i < array.length; i++) {
        if (array[i] === curElement) {
            return curIndex;
        } else {
            return -1;
        }
    }
}
