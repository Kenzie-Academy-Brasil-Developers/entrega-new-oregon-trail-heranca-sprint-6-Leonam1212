const Traveler = require("./Traveler") 
class Doctor extends Traveler {
    constructor(name, isHealthy,food) {
        super(name, isHealthy, food)
    
    }

    heal (traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true 
        }
        traveler.isHealthy = true
    }
}


module.exports = Doctor;