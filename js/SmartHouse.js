function SmartHouse(owner) {
    this._owner = owner;
    this._devices = []
}
SmartHouse.prototype.setOwner = function (owner) {
    if (typeof owner == 'string') {
        this._owner = owner
    }
}
    SmartHouse.prototype.getOwner = function () {
        return this._owner
    }

    
        var sm=new SmartHouse('Kate')
    SmartHouse.prototype.addDevices = function () {
        for (var i = 0; i < arguments.length; i++) {
            this._devices.push(arguments[i])
        }
    }
    
