import Daemon from '../daemon';

test('check creating object', () => {
    const daemon = new Daemon('Дима');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Дима',
        type: 'Daemon'
    }

    expect(daemon).toEqual(correct);
});