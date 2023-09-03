/**
 * author:Kazi tanvir azad
 */

"use strict";

const getDecision = (req, res, next) => {
    const decisionService = require("../scripts/service/decisionService");
    let requestBody = req.body;
    let loanRequestDecisionOutcome = null;
    if (requestBody) {
        let businessName = requestBody.businessName;
        let accountProvider = requestBody.accountProvider;
        let loanAmount = requestBody.loanAmount;
        if (!businessName || !accountProvider || !loanAmount || isNaN(loanAmount)) {
            let ErrorDTO = require("../dto/errorDTO");
            res.status(404);
            res.json(new ErrorDTO(true, "Invalid Input!"));
            return next();
        }
        loanRequestDecisionOutcome = decisionService.getLoanRequestDecisionOutcome(businessName, accountProvider, loanAmount);
        if (loanRequestDecisionOutcome.error) {
            res.status(404);
            res.json(loanRequestDecisionOutcome);
            return next();
        }
    }

    res.json({
        decisionOutcome: loanRequestDecisionOutcome
    });
    return next();
};

module.exports = { getDecision };