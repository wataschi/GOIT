const car1 = {
    name: 'Renault Megane 3',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsePower: 120
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 10;
    }

};

car1.start();