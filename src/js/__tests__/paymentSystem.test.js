import checkPaymentSystem from '../checkPaymentSystem'

test('Should return valid payment system', () => {
    let digs = '5536913801114162';
    checkPaymentSystem(digs)

    expect(checkPaymentSystem(digs)).toBe('Mastercard')
})