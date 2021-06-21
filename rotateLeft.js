function rotateLeft(n, d, arr) {
    let size = n;
    let newArr = [];
    let rotateLeftIdx = d;

    let i = 0;
    while (rotateLeftIdx < size) {
        newArr[i] = arr[rotateLeftIdx];
        i++;
        rotateLeftIdx++;
    }

    //set rotateLeftIdx back to 0
    rotateLeftIdx = 0;
    while (rotateLeftIdx < d) {
        newArr[i] = arr[rotateLeftIdx];
        i++;
        rotateLeftIdx++;
    }
    return newArr;
}

console.log(rotateLeft(5, 2, [1, 2, 3, 4, 5]));