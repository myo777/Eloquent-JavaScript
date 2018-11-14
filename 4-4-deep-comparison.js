/*
The == operator compares objects 
by identity. But sometimes, 
you would prefer to compare the values 
of their actual properties.

Write a function, deepEqual, 
that takes two values and 
returns true only if they are 
the same value or are objects 
with the same properties whose 
values are also equal when compared 
with a recursive call to deepEqual.

To find out whether to compare two things
 by identity (use the === operator for that) 
 or by looking at their properties, 
 you can use the typeof operator. 
 If it produces "object" for both values,
  you should do a deep comparison. 
  But you have to take one silly exception 
  into account: by a historical accident, 
  typeof null also produces "object".
*/

function deepEqual (val1, val2) {
  if (val1 === val2) return true;
  if (typeof val1 != "object" || 
    typeof val2 != "object" || val1 == null 
    || val2 == null) return false;
  else {
    var count1=0, count2=0;
    for (var prop in val1) {
      count1 += 1;
    }
    for (var prop in val2) {
      count2 += 1;
    }
    if (count1 != count2) return false;
    for (var prop in val1) {
      if (!(prop in val2)) return false;
      if (!(deepEqual(val1[prop], val2[prop]))) return false;
    }
    return true;
  }
}