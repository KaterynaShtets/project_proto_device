function CoffeeMachine(power, capacity) {
    Device.apply(this, arguments);
    this._capacity = capacity;
    this._waterAmount = 0;
    this._type='coffeemachine'
    this._timerId;
}
CoffeeMachine.prototype = Object.create(Device.prototype)
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype._waterAmountValid = function (amount) {
    if (typeof amount === 'number' && amount > 0 && amount < this._capacity) {
        this._waterAmount = amount

    }
}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    if (amount < 0) {
        throw new Error("Значение должно быть положительным");
    }
    if (amount > this._capacity) {
        throw new Error("Нельзя залить больше, чем " + capacity);
    }
    this._waterAmountValid(amount)
}
CoffeeMachine.prototype.getTimeToBoil = function () {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
}
CoffeeMachine.prototype.disable = function () {
    Device.prototype.disable()
    clearTimeout(this.timerId)
    let text5 ='Кофеварка остановлена'
    let textdiv5 = document.createElement('div');
     let p5 = document.createElement('p')
     p5.innerText = text5;
     document.body.appendChild(textdiv4)
     textdiv5.appendChild(p5);
}
CoffeeMachine.prototype._onReady = function () {
    let text4 ='Готов кофе: ' + this._waterAmount + 'мл'
       let textdiv4 = document.createElement('div');
        let p4 = document.createElement('p')
        p4.innerText = text4;
        document.body.appendChild(textdiv4)
        textdiv4.appendChild(p4);
   
    // Готов кофе: 150 мл
}
CoffeeMachine.prototype.run = function () {
    if (!this._enabled) {
        throw new Error("Кофеварка выключена")
    }
    self = this;
    this._timerId = setTimeout(function () {
        CoffeeMachine.prototype._onReady.call(self)
    }, this.getTimeToBoil())
}

CoffeeMachine.prototype.addWater = function (amount) {
    this.setWaterAmount(this._waterAmount + amount);
    console.log(this._waterAmount + amount)
};



//var coffeeMachine = new CoffeeMachine(100000, 400);
//coffeeMachine.enable();
//coffeeMachine.setPower(200000)
//coffeeMachine.setWaterAmount(100);
//coffeeMachine.addWater(200);
//coffeeMachine.addWater(100);
//coffeeMachine.run();

//coffeeMachine.disable();-остановит
//coffeeMachine.addWater(300); // Нельзя залить больше..
