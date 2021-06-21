function rotateLeft(n, d, arr) {
    let finalArr = [];
    let rotationIdx = d;

    let i = 0;
    while (rotationIdx < n) {
        finalArr[i] = arr[rotationIdx];
        i++;
        rotationIdx++;
    }

    rotationIdx = 0;
    while (rotationIdx < d) {
        finalArr[i] = arr[rotationIdx];
        i++;
        rotationIdx++;
    }
    return finalArr;
}

console.log(rotateLeft(5, 4, [1, 2, 3, 4, 5]));