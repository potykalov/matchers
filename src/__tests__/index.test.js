import sortHeroes from '../index.js';

describe('sortHeroes', () => {
  it('sorted array', () => {
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const received = sortHeroes([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);

    expect(received).toStrictEqual(expected);
  });
});
