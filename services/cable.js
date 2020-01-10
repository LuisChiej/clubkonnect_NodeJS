"use strict";
exports.__esModule = true;
exports.plans = function (_club) {
    return new Promise(function (resolve, reject) {
        _club.request('APICableTVPackagesV1', null)
            .then(function (res) {
            resolve(res);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.verify = function (_club, card_no) {
    return new Promise(function (resolve, reject) {
        _club.request('APIVerifyCableTVV1.0', "CableTV=01&SmartCardNo=" + card_no)
            .then(function (data) {
            if (data.body.customer_name !== "INVALID_SMARTCARDNO") {
                resolve(data);
            }
            else {
                _club.request('APIVerifyCableTVV1.0', "CableTV=02&SmartCardNo=" + card_no)
                    .then(function (data) {
                    if (data.body.customer_name !== "INVALID_SMARTCARDNO") {
                        resolve(data);
                    }
                    else {
                        _club.request('APIVerifyCableTVV1.0', "CableTV=03&SmartCardNo=" + card_no)
                            .then(function (data) {
                            if (data.body.customer_name !== "INVALID_SMARTCARDNO") {
                                resolve(data);
                            }
                            else {
                                resolve(data);
                            }
                        });
                    }
                })["catch"](function (error) {
                    reject(error);
                });
            }
        })["catch"](function (error) {
            reject(error);
        });
    });
};
exports.charge = function (_club, data) {
    return new Promise(function (resolve, reject) {
        var bundle = null;
        var cable_no = null;
        if (data.provider.toLowerCase() == "dstv") {
            cable_no = "01";
            if (data.package.toLowerCase() == "access") {
                bundle = "01";
            }
            else if (data.package.toLowerCase() == "family") {
                bundle = "02";
            }
            else if (data.package.toLowerCase() == "compact") {
                bundle = "03";
            }
            else if (data.package.toLowerCase() == "compact plus") {
                bundle = "04";
            }
            else if (data.package.toLowerCase() == "premium") {
                bundle = "05";
            }
            else if (data.package == "premium + hd/extra view") {
                bundle = "06";
            }
            else {
                reject({ statusCode: 200, body: { status: "error", message: "Package not available" } });
            }
        }
        else if (data.provider.toLowerCase() == "gotv") {
            cable_no = "02";
            if (data.package.toLowerCase() == "lite") {
                bundle = "01";
            }
            else if (data.package.toLowerCase() == "value") {
                bundle = "02";
            }
            else if (data.package.toLowerCase() == "plus") {
                bundle = "03";
            }
            else if (data.package.toLowerCase() == "max") {
                bundle = "04";
            }
            else {
                reject({ statusCode: 200, body: { status: "error", message: "Package not available" } });
            }
        }
        else if (data.provider.toLowerCase() == "startimes") {
            cable_no = "03";
            if (data.package.toLowerCase() == "nova") {
                bundle = "01";
            }
            else if (data.package.toLowerCase() == "basic") {
                bundle = "02";
            }
            else if (data.package.toLowerCase() == "smart") {
                bundle = "03";
            }
            else if (data.package.toLowerCase() == "classic") {
                bundle = "04";
            }
            else if (data.package.toLowerCase() == "unique") {
                bundle = "05";
            }
            else if (data.package.toLowerCase() == "super") {
                bundle = "06";
            }
            else {
                reject({ statusCode: 200, body: { status: "error", message: "Package not available" } });
            }
        }
        else {
            reject({ statusCode: 200, body: { status: "error", message: "Provider not available" } });
        }
        if (bundle === null) {
            reject({ statusCode: 200, body: { status: "error", message: "An error occured" } });
        }
        if (cable_no === null) {
            reject({ statusCode: 200, body: { status: "error", message: "An error occured" } });
        }
        exports.verify(_club, data.smart_card_no)
            .then(function (response) {
            if (response.body.customer_name !== "INVALID_SMARTCARDNO") {
                var params = "CableTV=" + cable_no + "&Package=" + bundle + "&SmartCardNo=" + data.smart_card_no;
                _club.request("APICableTVV1", params)
                    .then(function (data) {
                    resolve(data);
                })["catch"](function (error) {
                    reject(error);
                });
            }
            else {
                reject({ statusCode: 200, body: { status: "error", message: "Invalid SmartCard Number" } });
            }
        })["catch"](function (err) {
            reject({ statusCode: 200, body: { status: "error", message: "An Error Occured", err: err } });
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
