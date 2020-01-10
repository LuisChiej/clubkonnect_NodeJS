"use strict";
exports.__esModule = true;
var electricity_1 = require("../services/electricity");
var Electricity = /** @class */ (function () {
    function Electricity(club) {
        this.CLUB = club;
        this.onInit();
    }
    Electricity.prototype.onInit = function () {
        if (this.CLUB === null) {
            throw new Error('An error occured');
        }
    };
    Electricity.prototype.allPlans = function () {
        return electricity_1.plans(this.CLUB);
    };
    Electricity.prototype.verifyMeter = function (meter_no) {
        return electricity_1.verify(this.CLUB, meter_no);
    };
    Electricity.prototype.charge = function (data) {
        return electricity_1.charge(this.CLUB, data);
    };
    Electricity.prototype.query = function (order_id) {
        return electricity_1.query(this.CLUB, order_id);
    };
    Electricity.prototype.cancel = function (order_id) {
        return electricity_1.cancel(this.CLUB, order_id);
    };
    return Electricity;
}());
exports.Electricity = Electricity;
