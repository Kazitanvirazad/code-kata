/**
 * author:Kazi tanvir azad
 */

"use strict";

class Business {
    constructor(balanceSheetDAO, accountProvider, loanAmount) {
        this.businessName = balanceSheetDAO && balanceSheetDAO.name ?
            balanceSheetDAO.name : "";
        this.established = balanceSheetDAO && balanceSheetDAO.established ?
            balanceSheetDAO.established : "";
        this.accountProvider = accountProvider;
        this.loanAmount = loanAmount;
    }
}

module.exports = Business;