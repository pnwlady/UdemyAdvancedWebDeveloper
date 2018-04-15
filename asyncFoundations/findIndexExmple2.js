//Quiz: make findIndex
function findIndex(array, callback) {
    for(var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        } else {
            return -1;
        }
    }
}

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
