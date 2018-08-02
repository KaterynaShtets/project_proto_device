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

    SmartHouse.prototype.designDevice = function(type, name) {
        var newDevice = null;
        switch (type) {
            case 'fridge':
                newDevice = new Fridge(500, -2);
                this._devices.push(newDevice);
              
                break;
            case 'coffeemachine':
                
                newDevice = new CoffeeMachine(100000, 400);
                this._devices.push(newDevice);
                break;
        
        case 'coffeemachine':
                
                newDevice = new Microwave(300, 1000)
                this._devices.push(newDevice);
                break;
        }
    }
    
    
        var sm=new SmartHouse('Kate')
