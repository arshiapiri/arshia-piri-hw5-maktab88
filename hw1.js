function getArrayDepth(obj) {
    if (Array.isArray(obj)) {
    return 1 + Math.max(...obj.map(getArrayDepth))
    }
    else {
        return 0
    }
}


console.log(getArrayDepth([1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12]))
console.log(getArrayDepth([10, [25, 13], [14, [55]], 2]))