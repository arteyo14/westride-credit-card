let ownerName = document.querySelector("#owner-name");
let ownerShow = document.querySelector("#owner-name-show");

let bankName = document.querySelector("#bank-name");
let bankShow = document.querySelector("#bank-name-show");

let cardNumber = document.querySelector("#card-no");
let cardShow = document.querySelector("#card-show");

let cvcNumber = document.querySelector("#cvc-code");
let cvcShow = document.querySelector("#cvc-code-show");

let cardExpire = document.querySelector("#card-expire-input");
let cardExpireShow = document.querySelector("#card-expire-show");

//setting logic for show card's details
ownerName.addEventListener("input", (e) => {
  ownerShow.textContent = e.target.value;
});

bankName.addEventListener("input", (e) => {
  bankShow.textContent = e.target.value;
});

cvcNumber.addEventListener("input", (e) => {
  cvcShow.textContent = e.target.value;
});

cardNumber.addEventListener("input", (e) => {
  let format = e.target.value
    .trim()
    .split("")
    .map((char, i) => {
      if ((i + 1) % 4 === 0) {
        char = char + " ";
      }
      return char;
    });
  cardShow.textContent = format.join("");
});

cardExpire.addEventListener("input", (e) => {
  let format = e.target.value
    .trim()
    .split("")
    .map((char, i) => {
      if ((i + 1) % 2 == 0 && i + 1 !== 4) {
        char = char + "/";
      }
      return char;
    });
  cardExpireShow.textContent = format.join("");
});
