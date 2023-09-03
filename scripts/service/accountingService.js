/**
 * author:Kazi tanvir azad
 */

"use strict";

function getBalanceSheet(businessName, accountProvider, isDecision) {
    let providerFactory = require("../factory/accountingProviderFactory");
    let provider = providerFactory.getAccountingProvider(accountProvider);
    let balanceSheet = businessName && provider && accountProvider ? provider.getBalanceSheet(businessName, isDecision) : [];
    return balanceSheet;
}

function getAccountingProviders() {
    const accountingProviders = require("../../repository/accountProviders");
    const AccountingProviderDTO = require("../../dto/accountingProviderDTO");
    let providerList = [];
    for (let provider of accountingProviders) {
        let accountingProviderDTO = new AccountingProviderDTO(provider);
        providerList.push(accountingProviderDTO);
    }
    return providerList;
}

function getProfitLossSummaryByYear(balanceSheet) {
    let summary = 0;
    for (let balance of balanceSheet) {
        summary += balance.profitOrLoss;
    }
    return summary;
}

function getAverageAssetValue(balanceSheet) {
    let totalAssetValue = 0;
    for (let balance of balanceSheet) {
        totalAssetValue += balance.assetsValue;
    }
    return totalAssetValue / 12;
}

function getPreAssessment(balanceSheet, loanAmount) {
    let preAssessment = 20;
    let profitLossSummaryByYear = getProfitLossSummaryByYear(balanceSheet);
    if (profitLossSummaryByYear > 0) {
        preAssessment = 60;
    }
    let averageAssetValue = getAverageAssetValue(balanceSheet);
    if (averageAssetValue > loanAmount) {
        preAssessment = 100;
    }
    return preAssessment;
}

module.exports = {
    getAccountingProviders: getAccountingProviders,
    getBalanceSheet: getBalanceSheet,
    getPreAssessment: getPreAssessment
};