const master = document.querySelector('[data-id=mastercard]');
const visa = document.querySelector('[data-id=visa]');
const mir = document.querySelector('[data-id=mir]')

export default function checkPaymentSystem(digs) {
    if (digs[0] === '5') {
        master.classList.add('active');
        visa.classList.remove('active');
        mir.classList.remove('active');
        return 'Mastercard'
    } else if (digs[0] === '4') {
        visa.classList.add('active');
        master.classList.remove('active');
        mir.classList.remove('active');
        return 'Visa'
    } else if (digs[0] === '2') {
        mir.classList.add('active');
        visa.classList.remove('active');
        master.classList.remove('active');

        return 'Mir'
    } else {
        master.classList.remove('active');
        visa.classList.remove('active');
        mir.classList.remove('active');

        return false
    }
}