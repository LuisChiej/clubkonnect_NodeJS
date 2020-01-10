"use strict";
exports.__esModule = true;
var mobiledata_1 = require("../services/mobiledata");
var Mobiledata = /** @class */ (function () {
    function Mobiledata(club) {
        this.CLUB = null;
        this.CLUB = club;
        this.onInit();
    }
    Mobiledata.prototype.onInit = function () {
        if (this.CLUB === null) {
            throw new Error('An error occured');
        }
    };
    Mobiledata.prototype.allPlans = function () {
        return mobiledata_1.plans(this.CLUB);
    };
    Mobiledata.prototype.charge = function (data) {
        return mobiledata_1.charge(this.CLUB, data);
    };
    Mobiledata.prototype.query = function (order_id) {
        return mobiledata_1.query(this.CLUB, order_id);
    };
    Mobiledata.prototype.cancel = function (order_id) {
        return mobiledata_1.cancel(this.CLUB, order_id);
    };
    return Mobiledata;
}());
exports.Mobiledata = Mobiledata;
