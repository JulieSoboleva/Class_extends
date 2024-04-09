import Magician from '../magician';

test('check creating object', () => {
    const magician = new Magician('Женя');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Женя',
        type: 'Magician'
    }

    expect(magician).toEqual(correct);
});