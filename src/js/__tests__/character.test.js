import Character from '../character';

test('check creating object', () => {
  const person = new Character('Петя', 'Undead');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Петя',
    type: 'Undead'
  }

  expect(person).toEqual(correct);
});

test('check name length', () => {
  try {
      new Character("Вольфшлегельштайнхаузенбергедорф", "Bowman");
  } catch (e) {
      expect(e.message).toBe("Имя должно иметь от 2 до 10 символов");
  }
});

test('check person type', () => {
  try {
      new Character("Merlin", "Cook", 10, 50);
  } catch (e) {
      expect(e.message).toBe("Не корректный тип персонажа");
  }
});