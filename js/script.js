const errorMsg = document.querySelector(".msg");
const correctMsg = document.querySelector(".right");
const wrongMsg = document.querySelector(".wrong");
const resetBtn = document.querySelector(".btn-2");

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
        if (char === 1 || char === 2) {
          arr.splice(j, 2);
        }
      }
    }
    result = arr.length === 0 ? 1 : 0;
  } else {
    result = 0;
  }

  if (result) {
    correctMsg.style.display = "inline";
    wrongMsg.style.display = "none";
  } else {
    correctMsg.style.display = "none";
    wrongMsg.style.display = "inline";
  }
};

resetBtn.addEventListener("click", () => {
  correctMsg.style.display = "none";
  wrongMsg.style.display = "none";
});
