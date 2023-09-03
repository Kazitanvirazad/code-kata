/**
 * author:Kazi tanvir azad
 */

"use strict";

class DecisionRequest {
    constructor(balanceSheetDAO, accountProvider, loanAmount, preAssessment) {
        const businessDTO = require("../dto/businessDTO");
        this.businessDetails = new businessDTO(balanceSheetDAO, accountProvider, loanAmount);
        this.preAssessment = preAssessment;
    }
}

module.exports = DecisionRequest;