
/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
#### 
#####
######
#######
*/

function triangle(num) {
  var output = "";
  for (var i=0; i<=num; i++) {
    output += "#";
    console.log(output);
  }
}




Looping a Triangle:
 Write a loop that makes seven calls to console.log to output the following
 triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */

console.log("Loopoing a Triangle..");

function loopingTriangle() {
    var str = "";
    for (var i = 0; i <= 7; i++) {
        str+="#"
		console.log(str);
    }
}

loopingTriangle();
console.log("***End of this solution 1 ***")
