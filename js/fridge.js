function Fridge(power, temperature) {
    Device.apply(this, arguments)
    this._food = [];
    this._type='fridge'
    this._temperature = temperature;
}
Fridge.prototype = Object.create(Device.prototype)
Fridge.prototype.constructor = Fridge;
Fridge.prototype.addFood = function () {
    for (var i = 0; i < arguments.length; i++) {
        this._food.push(arguments[i])
    }
    if (!this._enabled) {
        throw new Error("Холодильник выключен");
    }
    if (this._food.length + arguments.length > this._power / 100) {
        throw new Error("Нельзя добавить, не хватает мощности");
    }
}
Fridge.prototype._getFood = function () {
    var res = 'В холодильнике: ' + this._food
    return res;
}
Fridge.prototype.setTemperature = function (temperature) {
    if (temperature > 10) {
        var text1 = 'включен режим разморозки.Нельзя положить еду,холоддильник размораживается'
        var textdiv1 = document.createElement('div');
        var p1 = document.createElement('p')
        p1.innerText = text1;
        fridgediv.appendChild(textdiv1)
        textdiv1.appendChild(p1);

        this._enabled = false;

    }
}
if (typeof temperature === 'number' && temperature > -20 && temperature < 0) {
    this._temperature = temperature
}

Fridge.prototype.getTemperature = function () {
    return this._temperature;
}

//var fridge = new Fridge(500, -2);

//fridge.setPower(1000);

//fridge.enable();
//console.log(fridge.getTemperature());
//fridge.setTemperature(-5);
//console.log(fridge.getTemperature())
//fridge.setTemperature(20);

//fridge.addFood("котлета");
//fridge.addFood("сок", "варенье");
//fridge.addFood("торт");
//fridge.disable()
//alert(fridge._getFood());
