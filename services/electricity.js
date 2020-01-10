"use strict";
exports.__esModule = true;
exports.plans = function (_club) {
    return new Promise(function (resolve, reject) {
        _club.request('APIElectricityDiscosV1', null)
            .then(function (res) {
            resolve(res);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.verify = function (_club, meter_no) {
    return new Promise(function (resolve, reject) {
        _club.request('APIVerifyElectricityV1', "ElectricCompany=01&MeterNo=" + meter_no)
            .then(function (data) {
            if (data.body.customer_name !== "INVALID_METERNO") {
                resolve({ data: data, id: "01" });
            }
            else {
                _club.request('APIVerifyElectricityV1', "ElectricCompany=02&MeterNo=" + meter_no)
                    .then(function (data) {
                    if (data.body.customer_name !== "INVALID_METERNO") {
                        resolve({ data: data, id: "02" });
                    }
                    else {
                        _club.request('APIVerifyElectricityV1', "ElectricCompany=03&MeterNo=" + meter_no)
                            .then(function (data) {
                            if (data.body.customer_name !== "INVALID_METERNO") {
                                resolve({ data: data, id: "03" });
                            }
                            else {
                                _club.request('APIVerifyElectricityV1', "ElectricCompany=04&MeterNo=" + meter_no)
                                    .then(function (data) {
                                    if (data.body.customer_name !== "INVALID_METERNO") {
                                        resolve({ data: data, id: "04" });
                                    }
                                    else {
                                        _club.request('APIVerifyElectricityV1', "ElectricCompany=05&MeterNo=" + meter_no)
                                            .then(function (data) {
                                            if (data.body.customer_name !== "INVALID_METERNO") {
                                                resolve({ data: data, id: "05" });
                                            }
                                            else {
                                                _club.request('APIVerifyElectricityV1', "ElectricCompany=06&MeterNo=" + meter_no)
                                                    .then(function (data) {
                                                    if (data.body.customer_name !== "INVALID_METERNO") {
                                                        resolve({ data: data, id: "06" });
                                                    }
                                                    else {
                                                        _club.request('APIVerifyElectricityV1', "ElectricCompany=07&MeterNo=" + meter_no)
                                                            .then(function (data) {
                                                            if (data.body.customer_name !== "INVALID_METERNO") {
                                                                resolve({ data: data, id: "07" });
                                                            }
                                                            else {
                                                                _club.request('APIVerifyElectricityV1', "ElectricCompany=09&MeterNo=" + meter_no)
                                                                    .then(function (data) {
                                                                    if (data.body.customer_name !== "INVALID_METERNO") {
                                                                        resolve({ data: data, id: "09" });
                                                                    }
                                                                    else {
                                                                        resolve({ data: data, id: "00" });
                                                                    }
                                                                })["catch"](function (err) {
                                                                    reject(err);
                                                                });
                                                            }
                                                        })["catch"](function (err) {
                                                            reject(err);
                                                        });
                                                    }
                                                })["catch"](function (err) {
                                                    reject(err);
                                                });
                                            }
                                        })["catch"](function (err) {
                                            reject(err);
                                        });
                                    }
                                })["catch"](function (err) {
                                    reject(err);
                                });
                            }
                        })["catch"](function (err) {
                            reject(err);
                        });
                    }
                })["catch"](function (err) {
                    reject(err);
                });
            }
        })["catch"](function (err) {
            reject(err);
        });
    });
};
exports.charge = function (_club, data) {
    var company_code = null;
    var metertype = null;
    return new Promise(function (resolve, reject) {
        if (data.type !== "PREPAID" && data.type !== "prepaid" && data.type !== "Prepaid"
            && data.type !== "POSTPAID" && data.type !== "postpaid" && data.type !== "Postpaid") {
            reject({ statusCode: 200, body: { status: "error", message: "Invalid type, type has to be either prepaid or postpaid" } });
        }
        if (data.type === "PREPAID" || data.type === "prepaid" || data.type === "Prepaid") {
            metertype = "01";
        }
        if (data.type === "POSTPAID" || data.type === "postpaid" || data.type === "Postpaid") {
            metertype = "02";
        }
        if (data.company == "EKEDC") {
            company_code = "01";
        }
        else if (data.company == "IKEDC") {
            company_code = "02";
        }
        else if (data.company == "AEDC") {
            company_code = "03";
        }
        else if (data.company == "KEDC") {
            company_code = "04";
        }
        else if (data.company == "PHEDC") {
            company_code = "05";
        }
        else if (data.company == "JEDC") {
            company_code = "06";
        }
        else if (data.company == "IBEDC") {
            company_code = "07";
        }
        else if (data.company == "EEDC") {
            company_code = "09";
        }
        else {
            reject({ statusCode: 200, body: { status: "error", message: "Invalid Company, Please check the online documentation for a comprehensive walkthrough" } });
        }
        if (company_code === null) {
            reject({ statusCode: 200, body: { status: "error", message: "An error occured" } });
        }
        exports.verify(_club, data.meter_no)
            .then(function (response) {
            if (response.data.body.customer_name !== "INVALID_METERNO") {
                var params = "ElectricCompany=" + company_code + "&MeterType=" + metertype + "&MeterNo=" + data.meter_no + "&Amount=" + data.amount;
                _club.request("APIElectricityV1", params)
                    .then(function (data) {
                    resolve(data);
                })["catch"](function (error) {
                    reject(error);
                });
            }
            else {
                reject({ statusCode: 200, body: { status: "error", message: "Invalid Meter Number" } });
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
