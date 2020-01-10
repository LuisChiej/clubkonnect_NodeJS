"use strict";
exports.__esModule = true;
exports.plans = function (_club) {
    return new Promise(function (resolve, reject) {
        _club.request('APIAirtimeDiscountV1', null)
            .then(function (res) {
            resolve(res);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.charge = function (_club, data) {
    return new Promise(function (resolve, reject) {
        var params = "Amount=" + data.amount + "&MobileNumber=" + data.recipientPhoneNumber;
        _club.request('APIAirtimeV1', params)
            .then(function (response) {
            resolve(response);
        })["catch"](function (error) {
            reject(error);
        });
    });
};
exports.query = function (_club, order_id) {
    return new Promise(function (resolve, reject) {
        var param = "OrderID=" + order_id;
        _club.request('APIQueryV1', param)
            .then(function (response) {
            resolve(response);
        })["catch"](function (error) {
            reject(error);
        });
    });
};
exports.cancel = function (_club, order_id) {
    return new Promise(function (resolve, reject) {
        var param = "OrderID=" + order_id;
        _club.request('APICancelV1', param)
            .then(function (response) {
            resolve(response);
        })["catch"](function (error) {
            reject(error);
        });
    });
};
