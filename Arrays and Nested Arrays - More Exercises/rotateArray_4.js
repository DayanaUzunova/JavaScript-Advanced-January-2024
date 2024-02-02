function rotateArray(inputArray, rotations) {
    // Make sure the array is not empty
    if (inputArray.length === 0) {
      return inputArray;
    }
  
    for (let i = 0; i < rotations % inputArray.length; i++) {
    
      inputArray.unshift(inputArray.pop());
    }
  
    // Return the rotated array
    console.log(inputArray.join(" "));
  }
rotateArray(['1',

'2',

'3',

'4'],

2)