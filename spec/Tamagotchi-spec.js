import { tamagotchi } from '../src/Tamagotchi.js';

let egg = tamagotchi;

describe('Tamagotchi', function() {
  it('should change the value of food level using feed function', function() {
    egg.foodLevel = 50;
    egg.feedSnack("snack");
    expect(egg.foodLevel).toEqual(70);
  });
});
