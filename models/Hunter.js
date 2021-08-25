const Traveler = require("./Traveler")

class Hunter extends Traveler {
    constructor(name, isHealthy,food) {
        super(name, isHealthy, food)
        this.food = 2
        this.isHealthy = true
    }

    hunt() {
        return this.food+= 5   
    }

    eat() {
        if(this.food >= 2) {
            return this.food-=2
        }
        if(this.food < 2) {
            return 0
        }
    }

    giveFood (traveler, numOfFoodUnits) {
      if (numOfFoodUnits < this.food){
          this.food -= numOfFoodUnits
          traveler.food = numOfFoodUnits
      }
    }


}


module.exports = Hunter;