"use strict";
exports.__esModule = true;
var cable_1 = require("../services/cable");
var Cable = /** @class */ (function () {
    function Cable(club) {
        this.CLUB = club;
        this.onInit();
    }
    Cable.prototype.onInit = function () {
        if (this.CLUB === null) {
            throw new Error('An error occured');
        }
    };
    Cable.prototype.allPlans = function () {
        return cable_1.plans(this.CLUB);
    };
    Cable.prototype.verifyCard = function (card_no) {
        return cable_1.verify(this.CLUB, card_no);
    };
    Cable.prototype.charge = function (data) {
        return cable_1.charge(this.CLUB, data);
    };
    Cable.prototype.query = function (order_id) {
        return cable_1.query(this.CLUB, order_id);
    };
    Cable.prototype.cancel = function (order_id) {
        return cable_1.cancel(this.CLUB, order_id);
    };
    return Cable;
}());
exports.Cable = Cable;
