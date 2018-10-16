import { tamagotchi } from '../src/Tamagotchi.js';


describe('Tamagotchi', function() {
  let egg = tamagotchi;

  beforeEach(function(){
    jasmine.clock().install();
    egg.setHunger();
    egg.setHappiness();
    egg.setSleep();
    egg.setAge();
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

  it('should start decreasing mess tolerance after it poops', function() {
    egg.foodLevel = 75;
    egg.feedSnack("snack");
    jasmine.clock().tick(90001);
    expect(egg.isSick).toEqual(true);
    expect(egg.messTolerance).toEqual(0);
  });

  it('should use the flush method to clean poop, reset tolerance, and clear the mess tolerance interval', function() {
    egg.foodLevel = 75;
    egg.feedSnack("snack");
    jasmine.clock().tick(75001);
    egg.flush();
    expect(egg.isPoopy).toEqual(false);
    expect(egg.messTolerance).toEqual(100);
    jasmine.clock().tick(10001);
    expect(egg.messTolerance).toEqual(100);
  });

  it('should not be sick if you give it medicine', function(){
    egg.isSick = true;
    egg.foodLevel = 50;
    egg.feedSnack("blueberreis");
    expect(egg.foodLevel).toEqual(50);
    egg.happinessLevel = 50;
    egg.playShort("swing");
    expect(egg.happinessLevel).toEqual(50);
    egg.giveMedicine();
    expect(egg.isSick).toEqual(false);
  });

  it('should have Tamagotchi age and return home when age is greater than 23', function() {
    egg.age = 23;
    jasmine.clock().tick(60001);
    expect(egg.isGone).toEqual(true);
  });
  
  it('should create a new Tamagotchi', function() {
    egg.foodLevel = 50;
    egg.newTamagotchi("New Egg");
    expect(egg.foodLevel).toEqual(100);
  });

});
