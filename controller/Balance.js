/**
 * author:Kazi tanvir azad
 */

"use strict";

const getBalanceSheet = (req, res, next) => {
    const accountingService = require("../scripts/service/accountingService");
    let businessName = "businessName" in req.query ? req.query.businessName : null;
    let accountProvider = "accountProvider" in req.query ? req.query.accountProvider : null;

    let balanceSheet = accountingService.getBalanceSheet(businessName, accountProvider, false);

    res.json({ sheet: balanceSheet });
    return next();
};

module.exports = { getBalanceSheet };