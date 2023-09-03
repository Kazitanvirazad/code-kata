/**
 * author:Kazi tanvir azad
 */

"use strict";

module.exports = {
    getAccountingProvider: (providerName) => {
        let provider = null;
        switch (providerName) {
            case "MYOB":
                provider = require("../provider/MYOB");
                let MYOB = new provider();
                return MYOB;
            case "Xero":
                provider = require("../provider/Xero");
                let Xero = new provider();
                return Xero;
            default:
                return provider;
        }
    }
};