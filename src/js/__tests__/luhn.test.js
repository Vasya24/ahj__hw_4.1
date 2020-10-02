import luhnAlgorithm from '../luhnAlgorithm'

test('Should be true', () => {
    let digits = '5536913801114162';
    luhnAlgorithm(digits)
    expect(luhnAlgorithm(digits).toBeTruthy)
})