// Define a 3x3 matrix
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Traverse the matrix column by column
  for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i][j]);
    }
  }
  