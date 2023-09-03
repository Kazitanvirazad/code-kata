/**
 * author:Kazi tanvir azad
 */

"use strict";

class BalanceSheet {
    constructor(balanceSheetDAO, name, established) {
        this.year = balanceSheetDAO && balanceSheetDAO.year ? balanceSheetDAO.year : "";
        this.month = balanceSheetDAO && balanceSheetDAO.month ? balanceSheetDAO.month : "";
        this.profitOrLoss = balanceSheetDAO && balanceSheetDAO.profitOrLoss ? balanceSheetDAO.profitOrLoss : "";
        this.assetsValue = balanceSheetDAO && balanceSheetDAO.assetsValue ? balanceSheetDAO.assetsValue : "";
        if (name && established) {
            this.name = name;
            this.established = established;
        }
    }
}

module.exports = BalanceSheet;