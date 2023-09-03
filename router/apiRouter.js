/**
 * author:Kazi tanvir azad
 */

"use strict";

const express = require('express');

/**
 * importing express Router module to the project
 */
const router = express.Router();

const Balance = require("../controller/Balance");
const Accounting = require("../controller/Accounting");
const Decision = require("../controller/Decision");


router.get("/balancesheet", Balance.getBalanceSheet);

router.get("/providers", Accounting.getAccountingProviderList);

router.post("/submit/loanrequest", Decision.getDecision);


module.exports = router;