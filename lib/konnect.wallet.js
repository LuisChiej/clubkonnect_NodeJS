"use strict";
exports.__esModule = true;
var wallet_1 = require("../services/wallet");
var Wallet = /** @class */ (function () {
    function Wallet(club) {
        this.CLUB = club;
        this.onInit();
    }
    Wallet.prototype.onInit = function () {
        if (this.CLUB === null) {
            throw new Error('An error occured');
        }
    };
    Wallet.prototype.getBalance = function () {
        return wallet_1.balance(this.CLUB);
    };
    return Wallet;
}());
exports.Wallet = Wallet;
