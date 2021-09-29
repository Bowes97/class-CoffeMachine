class CoffeeMake{
    constructor(regime){
        this.regime = regime
    }
    on(){
        console.log(`Coffee machine ${this.regime}`);
    }
    off(){
        console.log(`Coffee machine not ${this.regime}`);
    }
}
let coffeeMake = new CoffeeMake('included')
class DripCoffeeMaker extends CoffeeMake{
    constructor(regime, number){
        super(regime)
        this.number = number
    }
    temperature(){
        console.log(`Heating temperature ${this.number} degrees`);
    }
}
let dripcoffeemaker = new DripCoffeeMaker('included','50')
dripcoffeemaker.on()
dripcoffeemaker.temperature()
class CarobCoffeeMaker extends CoffeeMake{
    constructor(regime, look){
        super(regime)
        this.look = look
    }
    follow(){
        console.log(`You ${this.look} need to look`);
    }
}
let carobcoffeemaker = new CarobCoffeeMaker('included', "don't")
carobcoffeemaker.on()
carobcoffeemaker.follow()
class CoffeeMachine extends CoffeeMake{
    constructor(regime, work){
        super(regime)
        this.work = work
    }
    production(){
        console.log(`The coffee machine works ${this.work}`);
    }
}
let coffeMachine = new CoffeeMachine('included', 'automatically')
coffeMachine.off()
coffeMachine.production()