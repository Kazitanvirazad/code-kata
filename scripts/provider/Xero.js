/**
 * author:Kazi tanvir azad
 */

"use strict";

class Xero {
    constructor() {
        this.getBalanceSheet = (businessName, isDecision) => {
            const balanceSheet = require("../../repository/balanceSheet");
            const BalanceSheetDTO = require("../../dto/balanceSheetDTO");
            let balanceSheetList = [];
            if (businessName in balanceSheet) {
                let name = balanceSheet[businessName].name;
                let established = balanceSheet[businessName].established;
                for (let balance of balanceSheet[businessName].balanceSheet) {
                    let BalanceSheet = isDecision ? new BalanceSheetDTO(balance, name, established) : new BalanceSheetDTO(balance);
                    balanceSheetList.push(BalanceSheet);
                }
            }
            return balanceSheetList;
        }
    }
}

module.exports = Xero;