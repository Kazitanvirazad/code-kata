/**
 * author:Kazi tanvir azad
 */

"use strict";

const getAccountingProviderList = (req, res, next) => {
    const accountingService = require("../scripts/service/accountingService");
    let providerList = accountingService.getAccountingProviders();
    res.json({
        providers: providerList
    });
    return next();
};

module.exports = { getAccountingProviderList };