/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

function chessBoard(num) {
  var output = "";
  for (var i=0; i<num; i++) {
    if (i%2===0)
      for (var j=0; j<num/2; j++) {
        output += " #";
      }
    else
      for (var j=0; j<num/2; j++) {
        output += "# ";
      }
    output += "\n";
  }
  console.log(output);
}







console.log("Chess Board");

var rowCol = 8;


for (var i = 0; i < rowCol; i++) {
    var rowv = "";
    for (var j = 0; j < rowCol; j++) {
        if ((i+j) % 2 === 0) {
            rowv += " ";
        } else {
            rowv += "#";
        }
    }
    console.log(rowv);
}
