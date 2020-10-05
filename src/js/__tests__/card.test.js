import checkPaymentSystem, { card, master, visa, mir } from '../checkPaymentSystem'

test("Should be fine", () => {
    
    checkPaymentSystem('5469380001114162');
    expect(checkPaymentSystem.toBe('Mastercard'))
})