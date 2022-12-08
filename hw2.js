function flatArray(arr) {
    var flattened = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (!Array.isArray(current)) {
          flattened.push(current);
          continue;
      }
      for (let j = 0; j < current.length; j++) {
        flattened.push(current[j])
      }
    }
    console.log(flattened)
    return flattened;
    }
    
    console.log(flatArray([1, [2], [3, [[4]]]]));
//  myArray.reduce(ele, acc) 


