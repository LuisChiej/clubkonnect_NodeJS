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
        var network = data.provider.toLowerCase() == "9mobile" ? "03"
            : data.provider.toLowerCase() == "mtn" ? "01"
                : data.provider.toLowerCase() == "glo" ? "02"
                    : data.provider.toLowerCase() == "airtel" ? "04"
                        : "00";
        if (network === "00") {
            reject({ status: 'error', message: 'A valid network is required' });
        }
        var params = "MobileNetwork=" + network + "&Amount=" + data.amount + "&MobileNumber=" + data.recipientPhoneNumber;
        _club.request('APIAirtimeV1', params)
            .then(function (response) {
            if (response.body.status == "ORDER_RECEIVED") {
                resolve(response);
            }
            else {
                resolve(response);
            }
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
