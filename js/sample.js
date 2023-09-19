// import searchView from "./js/view/inputView.js";

// const checkBtn = document.querySelector(".btn-1");
// const resetBtn = document.querySelector(".btn-2");
// console.log(str);
// let str = "{([])()}";
// console.log(str.length);

const errorMsg = document.querySelector(".msg");
const correctMsg = document.querySelector(".right");
const wrongMsg = document.querySelector(".wrong");

const checking = () => {
  const str = document.querySelector(".value").value;
  console.log(str);
  if (!str) return;
  let len = str.length;
  console.log(len);
  let result;
  if (len % 2 === 0) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      let Letter = str[i];
      arr.push(Letter);
    }

    for (let k = 0; k < len / 2; k++) {
      for (let j = 0; j < arr.length - 1; j++) {
        let char = arr[j + 1].charCodeAt(0) - arr[j].charCodeAt(0);
        // console.log(char);
        if (char === 1 || char === 2) {
          arr.splice(j, 2);
          // console.log(R);
          // console.log(arr);
        }
      }
    }
    result = arr.length === 0 ? 1 : 0;
  } else {
    result = 0;
  }

  if (result) {
    // errorMsg.innerHTML = "valid";
    // errorMsg.style.color = "green";
    correctMsg.style.display = "inline";
    wrongMsg.style.display = "none";
  } else {
    // errorMsg.innerHTML = "invalid";
    // errorMsg.style.color = "red";
    correctMsg.style.display = "none";
    wrongMsg.style.display = "inline";
  }
};

// const reset = () => {
//   // const str = document.querySelector(".value").value;
//   // str = "";
//   // errorMsg.innerHTML = "";
//   correctMsg.style.display = "none";
//   wrongMsg.style.display = "none";
// };

// checkBtn.addEventListener("click", checking());
