class Wagon {

    constructor (capacity) {
        this.capacity = capacity 
        this.passengers = [] 
   
    }
    getAvailableSeatCount () {
      
        return this.capacity - this.passengers.length
    }

    join (traveler) {
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler)
        }
        
    }

    shouldQuarantine() {
     
        let result = this.passengers.some(viajante => viajante.isHealthy === false)
        return result
  
    }
    
    totalFood () {

        return this.passengers.reduce((acc, viajante) => acc + Number(viajante.food), 0)
        
    }

}
module.exports = Wagon;