let str = "{([])()}";
// console.log(str.length);
let len = str.length;
let arr = [];
let result;
if (len % 2 === 0) {
  for (let i = 0; i < len; i++) {
    let Letter = str[i];
    arr.push(Letter);
  }
  console.log(len);
  console.log(len / 2);
  for (let k = 0; k < len / 2; k++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let char = arr[j + 1].charCodeAt(0) - arr[j].charCodeAt(0);
      // console.log(char);
      if (char === 1 || char === 2) {
        arr.splice(j, 2);
        // console.log(R);
        console.log(arr);
      }
    }
  }
  result = arr.length === 0 ? 1 : 0;
} else {
  result = 0;
}

result ? console.log("valid") : console.log("invalid");
// console.log(r);

// let checking = function (str) {
//   let arr = [];
//   let arr1 = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === "(" || char === "[" || char === "{") {
//       arr.push(char);
//     } else if (char === ")" || char === "]" || char === "}") {
//       if (arr.length === 0) {
//         return 0;
//       } else {
//         let rem = arr[arr.length - 1];
//         if (rem === "(" || rem === "[" || rem === "{") {
//           arr.pop();
//         } else {
//           return 0;
//         }
//       }
//     }
//   }
//   if (arr.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let str = "[(])";
// if (checking(str)) {
//   console.log("Valid");
// } else {
//   console.log("Invalid");
// }
