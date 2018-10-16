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
  isGone: false,
  isAsleep: false,
  isCrying: false,
  isPoopy: false,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel <= 0) {
        clearInterval(hungerInterval);
        this.isGone == true;
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
      } else if (that.isSick) {
        return "Your Tamagotchi is sick and won't eat."
      } else if (that.foodLevel + amount > 100) {
        return `Your Tamagotchi isn't hungry enough to eat a ${food}.`;
      } else if (that.isGone == false){
        that.foodLevel += amount;
        setTimeout(() => {
          this.isPoopy = true;
          this.setMessTolerance();
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
        this.isGone == true;
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
      } else if (that.isSick) {
        return "Your Tamagotchi is sick and won't play."
      } else if (that.isGone == false) {
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

  flush: function() {
    this.isPoopy = false;
    this.messTolerance = 100;
    return "You flushed your Tamagotchi's poop.";
  },

  setMessTolerance: function() {
    if (this.isPoopy) {
      const toleranceInterval = setInterval(() => {
        this.messTolerance--;
        if (this.messTolerance <= 0) {
          this.isSick = true;
          clearInterval(toleranceInterval);
          return "Your Tamagotchi got sick.";
        } else if (!this.isPoopy) {
          clearInterval(toleranceInterval);
        }
      }, 250);
    }
  },

  setAge: function() {
    const ageInterval = setInterval(() => {
      this.age++;
      if (this.age > 23) {
        this.isGone = true;
        return "Your tamagotchi has returned to his home planet."
      }
    }, 60000);
  },

  giveMedicine: function() {
    this.isSick = false;
  },

  newTamagotchi: function(newName) {
    this.name = newName,
    this.foodLevel = 100,
    this.happinessLevel = 100,
    this.sleepLevel = 100,
    this.disciplineLevel = 50,
    this.messTolerance = 100,
    this.age = 0,
    this.isSick = false,
    this.isRestless = false,
    this.isGone = false,
    this.isAsleep = false,
    this.isCrying = false,
    this.isPoopy = false
    return `You have hatched a new Tamagotchi named ${this.name}! Your old Tamagotchi has rejoined his people.`
  }
};

tamagotchi.feedSnack = tamagotchi.feed(25);
tamagotchi.feedMeal = tamagotchi.feed(75);
tamagotchi.playShort = tamagotchi.play(25);
tamagotchi.playLong = tamagotchi.play(50);
