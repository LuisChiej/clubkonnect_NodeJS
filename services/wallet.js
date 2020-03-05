"use strict";
exports.__esModule = true;
exports.balance = function (_club) {
    return new Promise(function (resolve, reject) {
        _club.balance_request('APIWalletBalanceV1')
            .then(function (res) {
            resolve(res);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
