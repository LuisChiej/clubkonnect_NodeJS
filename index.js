"use strict";
exports.__esModule = true;
var club_1 = require("./lib/club");
var konnect_airtime_1 = require("./lib/konnect.airtime");
var konnect_mobiledata_1 = require("./lib/konnect.mobiledata");
var konnect_cable_1 = require("./lib/konnect.cable");
var konnect_electricity_1 = require("./lib/konnect.electricity");
var Clubkonnect = /** @class */ (function () {
    function Clubkonnect(user_id, api_key) {
        this.USER_ID = user_id;
        this.API_KEY = api_key;
        this.onInit();
        this.Airtime = new konnect_airtime_1.Airtime(this.club);
        this.Mobiledata = new konnect_mobiledata_1.Mobiledata(this.club);
        this.Cable = new konnect_cable_1.Cable(this.club);
        this.Electricity = new konnect_electricity_1.Electricity(this.club);
    }
    Clubkonnect.prototype.onInit = function () {
        this.club = new club_1.Club(this.USER_ID, this.API_KEY);
    };
    return Clubkonnect;
}());
exports.Clubkonnect = Clubkonnect;
