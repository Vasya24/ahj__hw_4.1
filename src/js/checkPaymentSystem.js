/* eslint-disable */
export default function checkPaymentSystem(digs) {
let master = document.querySelector('#mastercard');
let visa = document.querySelector('#visa');
let mir = document.querySelector('#mir');
  if (digs[0] === '5') {
    master.classList.add('active');
    visa.classList.remove('active');
    mir.classList.remove('active');
  } else if (digs[0] === '4') {
    visa.classList.add('active');
    master.classList.remove('active');
    mir.classList.remove('active');
  } else if (digs[0] === '2') {
    mir.classList.add('active');
    visa.classList.remove('active');
    master.classList.remove('active');
  } else {
    master.classList.remove('active');
    visa.classList.remove('active');
    mir.classList.remove('active');
  }
}