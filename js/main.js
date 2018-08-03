'use strict'

function Device(power) {
    this._power = power;
    this._enabled = false

}
Device.prototype.enable = function () {
    this._enabled = true;
};
Device.prototype.disable = function () {
    this._enabled = false;
};
Device.prototype._powerValid = function (power) {
    if (typeof power === 'number') {
        this._power = power;
    }
};
Device.prototype.setPower = function (power) {
    this._powerValid(power);
}
