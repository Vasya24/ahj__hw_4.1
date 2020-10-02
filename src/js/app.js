/* eslint-disable */
import luhnAlghorithm from "./luhnAlgorithm";
import checkPaymentSystem from "./checkPaymentSystem";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let inp = document.querySelector("[data-id=validate-card-input");
  e.preventDefault();
  luhnAlghorithm(inp.value);
  checkPaymentSystem(inp.value);
});
