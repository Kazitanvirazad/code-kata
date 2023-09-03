/**
 * author:Kazi tanvir azad
 */

"use strict";

class AccountingProviderDTO {
    constructor(accountingProviderDAO) {
        this.provider = accountingProviderDAO && accountingProviderDAO.name ? accountingProviderDAO.name : null;
    }
}

module.exports = AccountingProviderDTO;