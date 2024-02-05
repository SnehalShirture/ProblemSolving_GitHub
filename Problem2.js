/*Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Marathi of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.

Practice Problem 2

Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04
 */

var MathematicsResult = 75.25;
var BiologyResult = 65;
var ChemistryResult = 80;
var PhysicsResult = 35.45;
var MarathiResult = 99.25;

var totalMarks =
  MarathiResult +
  BiologyResult +
  ChemistryResult +
  PhysicsResult +
  MarathiResult;

var avgmarks = totalMarks / 5;
var avgmarksindecimal = avgmarks.toFixed(2);
console.log(parseFloat(avgmarksindecimal))

// The toFixed() method converts a number to a string.

// The toFixed() method rounds the string to a specified number of decimals.