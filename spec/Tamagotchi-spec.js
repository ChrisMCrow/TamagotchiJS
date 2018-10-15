import { tamagotchi } from '../src/Tamagotchi.js';


describe('Tamagotchi', function() {
  let egg = tamagotchi;

  beforeEach(function(){
    jasmine.clock().install();
    egg.setHunger();
    egg.setHappiness();
    egg.setSleep();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
    egg.isAsleep = false;
  });

  it('should decrease a food level by 1 after 1000 milliseconds', function() {
    egg.foodLevel = 100;
    jasmine.clock().tick(3001);
    expect(egg.foodLevel).toEqual(97);
  });

  it('should change the value of food level using feedSnack function', function() {
    egg.foodLevel = 50;
    egg.feedSnack("snack");
    expect(egg.foodLevel).toEqual(75);
    egg.foodLevel = 50;
    expect(egg.feedSnack("snack")).toEqual("Your Tamagotchi ate the snack! Food level is now 75!");
  });

  it('should change the value of food level using feedMeal function', function() {
    egg.foodLevel = 0;
    egg.feedMeal("meal");
    expect(egg.foodLevel).toEqual(75);
    egg.foodLevel = 0;
    expect(egg.feedMeal("meal")).toEqual("Your Tamagotchi ate the meal! Food level is now 75!");
  });

  it('should decrease a happinessLevel level by 1 after 900 milliseconds', function() {
    egg.happinessLevel = 100;
    jasmine.clock().tick(2701);
    expect(egg.happinessLevel).toEqual(97);
  });

  it('should change the value of happiness level using feedplay function', function() {
    egg.happinessLevel = 50;
    egg.playShort("catch");
    expect(egg.happinessLevel).toEqual(75);
    egg.happinessLevel = 0;
    expect(egg.playLong("swing")).toEqual("Your Tamagotchi played swing! Happiness level is now 50!");
  });

  it('should decrease a sleepLevel level by 1 after 1500 milliseconds', function() {
    egg.sleepLevel = 100;
    jasmine.clock().tick(4501);
    expect(egg.sleepLevel).toEqual(97);
  });

  it('should increase a sleep level by 5 after 1000 milliseconds', function () {
    egg.sleepLevel =50;
    egg.lightsOut();
    jasmine.clock().tick(1001);
    expect(egg.sleepLevel).toEqual(55);
  });

  it('should poop 60 seconds after eating', function() {
    egg.foodLevel = 75;
    egg.feedSnack("snack");
    jasmine.clock().tick(60001);
    expect(egg.isPoopy).toEqual(true);
  });



});
