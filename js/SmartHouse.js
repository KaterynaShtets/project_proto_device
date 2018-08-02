function SmartHouse(owner) {
    this._owner = owner;
    this._devices = []
}
SmartHouse.prototype.setOwner = function (owner) {
    if (typeof owner == 'string') {
        this._owner = owner
    }
    SmartHouse.prototype.getOwner = function () {
        return this._owner
    }

    SmartHouse.prototype.addDevices = function () {
        for (var i = 0; i < arguments.length; i++) {
            this._devices.push(arguments[i])
        }
    }
}

var smhouse = new SmartHouse('kate')
var coffeeMachine = new CoffeeMachine(100000, 400);
smhouse.addDevices(coffeeMachine);
var fridge = new Fridge(500, -2);
smhouse.addDevices(fridge)
var microwave = new Microwave(300, 1000);
smhouse.addDevices(microwave)
