class Traveler {

    constructor (name,isHealthy,food) {
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }

    hunt () {
         return this.food += 2     
    }

    eat () {
        if(this.food > 0) {
            return this.food-=1
        }
        if(this.food === 0) {
            return this.isHealthy = false
        }
    }
}



module.exports = Traveler;