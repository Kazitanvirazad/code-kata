/**
 * author:Kazi tanvir azad
 */

"use strict";

function calculateLoanAmount(decisionRequest) {
    let requestedLoanAmount = decisionRequest.businessDetails.loanAmount;
    let calculatedPreAssessment = decisionRequest.preAssessment;
    let amount = requestedLoanAmount * (calculatedPreAssessment / 100);
    return Math.round(amount * 100) / 100;
}

module.exports = {
    getLoanRequestDecisionOutcome: (businessName, accountProvider, loanAmount) => {
        const accountingService = require("../service/accountingService");
        const DecisionRequestDTO = require("../../dto/decisionRequestDTO");
        let balanceSheet = accountingService.getBalanceSheet(businessName, accountProvider, true);
        let decisionRequest = {};
        if (balanceSheet.length < 1) {
            let ErrorDTO = require("../../dto/errorDTO");
            decisionRequest = new ErrorDTO(true, "Invalid Input!");
            return decisionRequest;
        };

        let preAssessment = accountingService.getPreAssessment(balanceSheet, loanAmount);
        decisionRequest = new DecisionRequestDTO(balanceSheet[0], accountProvider, loanAmount, preAssessment);
        decisionRequest["approvedLoanAmount"] = calculateLoanAmount(decisionRequest);
        return decisionRequest;
    }
};