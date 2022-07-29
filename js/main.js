const calculator1 = calculatorFactory.createNewCalculator();
calculator1.init();

slider1.start();

function Dog(name) {
    this.name = name;
    this.voice = function() {
        console.log('My name is ' + this.name)
    }
}
const dogy = new Dog("vanya");
const dogy2 = new Dog("ivan");