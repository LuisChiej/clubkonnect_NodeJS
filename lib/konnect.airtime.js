"use strict";
exports.__esModule = true;
var airtime_1 = require("../services/airtime");
var Airtime = /** @class */ (function () {
    function Airtime(club) {
        this.CLUB = club;
        this.onInit();
    }
    Airtime.prototype.onInit = function () {
        if (this.CLUB === null) {
            throw new Error('An error occured');
        }
    };
    Airtime.prototype.allPlans = function () {
        return airtime_1.plans(this.CLUB);
    };
    Airtime.prototype.charge = function (data) {
        return airtime_1.charge(this.CLUB, data);
    };
    Airtime.prototype.query = function (order_id) {
        return airtime_1.query(this.CLUB, order_id);
    };
    Airtime.prototype.cancel = function (order_id) {
        return airtime_1.cancel(this.CLUB, order_id);
    };
    return Airtime;
}());
exports.Airtime = Airtime;
