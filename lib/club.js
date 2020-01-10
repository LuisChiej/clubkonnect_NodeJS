"use strict";
exports.__esModule = true;
var request = require("request");
var Club = /** @class */ (function () {
    function Club(user_id, api_key) {
        this.USER_ID = null;
        this.API_KEY = null;
        this.API_KEY = api_key;
        this.USER_ID = user_id;
        this.onInit();
    }
    Club.prototype.onInit = function () {
        this.isEmpty(this.API_KEY, 'API_KEY is required');
        this.isEmpty(this.USER_ID, 'USER_ID is required');
    };
    Club.prototype.isEmpty = function (value, message) {
        if (value === undefined) {
            throw new Error(message);
        }
    };
    Club.prototype.getapiKey = function () {
        if (this.API_KEY === null) {
            throw new Error('API_KEY not set');
        }
        return this.API_KEY;
    };
    Club.prototype.getuserId = function () {
        if (this.API_KEY === null) {
            throw new Error('USER_ID not set');
        }
        return this.USER_ID;
    };
    Club.prototype.request = function (path, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (params) {
                request("https://nellobytesystems.com/" + path + ".asp?UserID=" + _this.getuserId() + "&APIKey=" + _this.getapiKey() + "&" + params, { json: true }, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
            }
            else {
                request("https://nellobytesystems.com/" + path + ".asp", { json: true }, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
            }
        });
    };
    return Club;
}());
exports.Club = Club;
