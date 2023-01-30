const arr = ["a", "b", "c", "d", "e"];
var index = 2;

function remove(index, arr) {

    if (index > arr.length || index < 0) {
        return null, arr;
    } else {
        var arrexpected = [];
        for (var i = 0; i < arr.length; i++) {
            if (i != index) {
                arrexpected.push(arr[i]);
            }
        }
        console.log(arrexpected, arr[index]);
        return;
    }
}
remove(2,arr);