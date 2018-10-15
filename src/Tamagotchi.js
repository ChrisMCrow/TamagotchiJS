export let tamagotchi = {
  name: "Tamagotchi",
  foodLevel: 100,
  happinessLevel: 100,
  sleepLevel: 100,
  disciplineLevel: 50,
  messTolerance: 100,
  age: 0,
  isSick: false,
  isRestless: false,
  isDead: false,
  isAsleep: false,
  isCrying: false,
  isPoopy: false,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel <= 0) {
        clearInterval(hungerInterval);
        this.isDead == true;
        return "Your Tamagotchi is dead.";
      }
    }, 1000);
  },

  feed: function(amount) {
    let that = this;
    return function(food) {
      if (that.isRestless) {
        return "Your Tamagotchi is restless and won't eat."
      } else if (that.isAsleep) {
        return "Your Tamagotchi is asleep";
      }
        else if (that.foodLevel + amount > 100) {
        return `Your Tamagotchi isn't hungry enough to eat a ${food}.`;
      } else if (that.isDead == false){
        that.foodLevel += amount;
        setTimeout(() => {
          this.isPoopy = true;
          return "Your Tamagotchi pooped."
        }, 60000);
        return `Your Tamagotchi ate the ${food}! Food level is now ${that.foodLevel}!`;
      } else {
        return "Your Tamagotchi is dead.";
      }
    };
  },

  setHappiness: function() {
    const happinessInterval = setInterval(() => {
      this.happinessLevel--;
      if (this.happinessLevel <= 0) {
        clearInterval(happinessInterval);
        this.isDead == true;
        return "Your Tamagotchi is dead.";
      }
    }, 900);
  },

  play: function(amount) {
    let that = this;
    return function(play) {
      if (that.isRestless) {
        return "Your Tamagotchi is restless and won't play."
      } else if (that.isAsleep) {
        return "Your Tamagotchi is asleep";
      } else if (that.isDead == false) {
        (that.happinessLevel + amount > 100) ? that.happinessLevel = 100 : that.happinessLevel += amount;
        return `Your Tamagotchi played ${play}! Happiness level is now ${that.happinessLevel}!`
      } else {
        return "Your Tamagotchi is dead.";
      }
    };
  },

  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if (this.sleepLevel < 25) {
        return "Your Tamagotchi is getting sleepy."
      } else if (this.sleepLevel <= 0) {
        clearInterval(sleepInterval);
        this.sleepLevel = 0;
        this.restlessness = true;
      }
    }, 1500);
  },

  lightsOut: function() {
    const restInterval = setInterval(() => {
      this.isAsleep = true;
      this.sleepLevel+=5;
      if (this.sleepLevel >= 100) {
        clearInterval(restInterval);
        this.isAsleep = false;
        return "Your Tamagotchi is awake."
      }
    }, 1000);
  },

  setPoop: function() {

  }

};

tamagotchi.feedSnack = tamagotchi.feed(25);
tamagotchi.feedMeal = tamagotchi.feed(75);
tamagotchi.playShort = tamagotchi.play(25);
tamagotchi.playLong = tamagotchi.play(50);
