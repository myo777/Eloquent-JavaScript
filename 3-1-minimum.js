/*
The previous chapter introduced the standard function Math.min 
that returns its smallest argument. 
We can do that ourselves now. 
Write a function min that takes two arguments 
and returns their minimum.
*/

function min (num1, num2) 
{
  if (num1 < num2)
  { 
  	return num1;
  }else 
  {
  return num2;
  }
}
console.log(min(3,4));



/*Write a function that takes two arguments
 and returns their minimum.*/

function min(a, b) {
    if (a < b) {
        return a;
    } else return b;
}

console.log(min(2,3));
console.log("***End of this solution***");