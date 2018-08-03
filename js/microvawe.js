function Microwave(power, time) {
    Device.apply(this, arguments);
    this._time = time
    this._type = 'microwave'
}
Microwave.prototype = Object.create(Device.prototype)
Microwave.prototype.constructor = Microwave;
Microwave.prototype._onReady = function () {
    var text = 'Еда нагрета';
    return text
}
Microwave.prototype._setTimeToCook = function (time) {
    this._time = time;
}
Microwave.prototype._getTimeToCook = function () {
    return this._time
}
Microwave.prototype.run = function () {
    if (!this._enabled) {
        throw new Error("Микроволновка выключена");
    }
    this._timerId = setTimeout(this._onReady, this._getTimeToCook());
};
Microwave.prototype.disable = function () {
    Device.prototype.disable.apply(this);
    clearTimeout(this._timerId);
    var text3 = 'Микроволновка остановлена'
    return text3
}
//var microwave = new Microwave(300, 1000);
//microwave.enable();
//microwave.run();
//microwave.disable();