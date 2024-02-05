/*Practice Challenge - 1:

In the class seven's final exam, you have come first. You don't know the grades of your friends Aliya, Dalia, Saliya, Maliya, Liliya, and Jwalaiya, but you know their scores. Aliya scored 95, Dalia scored 66, Saliya scored 80, Maliya scored 59, Liliya scored 47, and Jwalaiya scored 77. Can you determine their grades using JS code?

1) Those who scored below 50 get grade E.

2) Those who scored 50 or above, or below 60, get grade D.

3) Those who scored 60 or above, or below 70, get grade C.

4) Those who scored 70 or above, or below 80, get grade B.

5) Those who scored 80 or above, or below 90, get grade A.

6) Those who scored 90 or above get grade A+. */

const frndmarks = [
  { Name: "aliyas", Marks: 95 },
  { Name: "daliya", Marks: 66 },
  { Name: "saliya", Marks: 80 },
  { Name: "miliya", Marks: 59 },
  { Name: "liliya", Marks: 47 },
  { Name: "jaliya", Marks: 77 },
];

//1) Those who scored below 50 get grade E.

const gradef = frndmarks.filter((stdgradef) => stdgradef.Marks < 50);
console.log("The Student ", gradef, "Got Grade E");

//2 Those who scored 50 or above, or below 60, get grade D.

const gradeD = frndmarks.filter(
  (stdgradeD) => stdgradeD.Marks > 50 && stdgradeD.Marks < 60
);

console.log("The Student ", gradeD, "Got Grade D");

// 3) Those who scored 60 or above, or below 70, get grade C.

const gradeC = frndmarks.filter(
  (stdgradeC) => stdgradeC.Marks > 60 && stdgradeC.Marks < 70
);
console.log("The Student ", gradeC, "Got Grade C");

//4) Those who scored 70 or above, or below 80, get grade B.

const gradeB = frndmarks.filter(
  (stdgradeB) => stdgradeB.Marks >= 70 && stdgradeB.Marks < 80
);

console.log("The Student ", gradeB, "Got Grade B");

//5) Those who scored 80 or above, or below 90, get grade A.

const gradeA = frndmarks.filter(
  (stdgradeA) => stdgradeA.Marks >= 80 && stdgradeA.Marks < 90
);

console.log("The Student ", gradeA, "Got Grade A");

//6) Those who scored 90 or above get grade A+.

const gradeAplus = frndmarks.filter(
  (stdgradeAplus) => stdgradeAplus.Marks >= 90
);

console.log("Congratulation ", gradeAplus, " Got grade A+");
