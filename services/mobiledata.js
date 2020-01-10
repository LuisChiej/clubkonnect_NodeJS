"use strict";
exports.__esModule = true;
exports.plans = function (_club) {
    return new Promise(function (resolve, reject) {
        _club.request('APIDatabundlePlansV1', null)
            .then(function (res) {
            resolve(res);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.charge = function (_club, data) {
    return new Promise(function (resolve, reject) {
        var code;
        var network = data.provider.toLowerCase() == "9mobile" ? "03"
            : data.provider.toLowerCase() == "mtn" ? "01"
                : data.provider.toLowerCase() == "glo" ? "02"
                    : data.provider.toLowerCase() == "airtel" ? "04"
                        : "00";
        if (data.provider.toLowerCase() == "9mobile") {
            code = data.bundle == "500MB" ? "500.01"
                : data.bundle == "1GB" ? "1000.01"
                    : data.bundle == "1.5GB" ? "1500.01"
                        : data.bundle == "2.5GB" ? "2500.01"
                            : data.bundle == "4GB" ? "4000.01"
                                : data.bundle == "5.5GB" ? "5500.01"
                                    : data.bundle == "11.5GB" ? "11500.01"
                                        : data.bundle == "15GB" ? "15000.01"
                                            : data.bundle == "27GB" ? "27000.01"
                                                : null;
        }
        else if (data.provider.toLowerCase() == "mtn") {
            code = data.bundle == "1GBS" ? "1000"
                : data.bundle == "1GB" ? "1500.01"
                    : data.bundle == "2GBS" ? "2000.01"
                        : data.bundle == "2.5GB" ? "3500.01"
                            : data.bundle == "5GBS" ? "5000"
                                : null;
        }
        else if (data.provider.toLowerCase() == "glo") {
            code = data.bundle == "1.8GB" ? "1600.01"
                : data.bundle == "4.5GB" ? "3750.01"
                    : data.bundle == "7.2GB" ? "5000.01"
                        : data.bundle == "8.75GB" ? "6000.01"
                            : data.bundle == "12.5GB" ? "8000.01"
                                : null;
        }
        else if (data.provider.toLowerCase() == "airtel") {
            code = data.bundle == "1.5GB" ? "1500.01"
                : data.bundle == "3.5GB" ? "3500.01"
                    : data.bundle == "7GB" ? "7000.01"
                        : null;
        }
        else {
            code = null;
        }
        if (code !== null && network !== "00") {
            var params = "MobileNetwork=" + network + "&DataPlan=" + code + "&MobileNumber=" + data.recipientPhoneNumber;
            _club.request('APIAirtimeV1', params)
                .then(function (response) {
                resolve(response);
            })["catch"](function (error) {
                reject(error);
            });
        }
        else {
            reject('A valid network and data bundle is required');
        }
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
