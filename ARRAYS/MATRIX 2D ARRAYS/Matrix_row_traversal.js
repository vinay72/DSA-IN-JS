// Define a 3x3 matrix
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  // arr.length = no of rows
  // arr[0].length = no of columns
  // Traverse the matrix row by row
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      console.log(arr[i][j]);
    }
  }
// matrix is a 3x3 matrix.
// The outer loop (for (let i = 0; i < matrix.length; i++)) iterates over each row.
// The inner loop (for (let j = 0; j < matrix[i].length; j++)) iterates over each element in the current row.
// console.log(matrix[i][j]) prints each element of the matrix.
// ROW TRAVERSAL  