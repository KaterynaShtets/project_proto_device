function Microwave(power, time) {
    Device.apply(this, arguments);
    this._time = time
    this._type='microwave'
}
Microwave.prototype = Object.create(Device.prototype)
Microwave.prototype.constructor = Microwave;
Microwave.prototype._onReady = function () {
    var text = 'Еда нагрета';
    var textdiv = document.createElement('div');
    var p = document.createElement('p')
    p.innerText = text;
    document.body.appendChild(textdiv)
    textdiv.appendChild(p);
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
    alert('Микроволновка остановлена')
}
//var microwave = new Microwave(300, 1000);
//microwave.enable();
//microwave.run();
//microwave.disable();
