export let tamagotchi = {
  name: "Tamagotchi",
  foodLevel: 100,
  sleepLevel: 100,
  happinessLevel: 100,
  disciplineLevel: 50,
  age: 0,
  sickness: false,
  restlessness: false,
  messTolerance: 100,
  dead: false,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.isDead() == true) {
        clearInterval(hungerInterval);
        return "Your Tamagotchi is dead!";
      }
    }, 1000);
  },
  setHappiness: function() {
    const happinessInterval = setInterval(() => {
      this.happinessLevel--;
      if (this.isDead() == true) {
        clearInterval(happinessInterval);
        return "Your Tamagotchi is dead!";
      }
    }, 900);
  },
  isDead: function() {
    if (this.foodLevel > 0 && this.happinessLevel > 0) {
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount) {
    let that = this;
    return function(food) {
      (that.foodLevel + amount > 100) ? that.foodLevel = 100 : that.foodLevel += amount;
      return `Your Tamagotchi ate the ${food}! Food level is now ${that.foodLevel}!`
    }
  },

  

};
