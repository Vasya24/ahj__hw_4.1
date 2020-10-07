/* eslint-disable */
import luhnAlghorithm from "./luhnAlgorithm";
import checkPaymentSystem from "./checkPaymentSystem";

let cardForm = document.getElementById('form');


cardForm.addEventListener("submit", (e) => {
  let inp = document.querySelector("[data-id=validate-card-input");
  e.preventDefault();
  luhnAlghorithm(inp.value);
  checkPaymentSystem(inp.value);
});