/**
 * author:Kazi tanvir azad
 */

"use strict";

/**
 * Assuming this dummy data is fetched from database
 */
const balanceSheet = {
    "ABC Enterprise": {
        "established": 2020,
        "name": "ABC Enterprise",
        "balanceSheet":
            [
                {
                    "year": 2020,
                    "month": 12,
                    "profitOrLoss": 250000,
                    "assetsValue": 1234
                },
                {
                    "year": 2020,
                    "month": 11,
                    "profitOrLoss": 1150,
                    "assetsValue": 5789
                },
                {
                    "year": 2020,
                    "month": 10,
                    "profitOrLoss": 2500,
                    "assetsValue": 22345
                },
                {
                    "year": 2020,
                    "month": 9,
                    "profitOrLoss": -180,
                    "assetsValue": 22452
                },
                {
                    "year": 2020,
                    "month": 8,
                    "profitOrLoss": 180,
                    "assetsValue": 2122
                },
                {
                    "year": 2020,
                    "month": 7,
                    "profitOrLoss": 741,
                    "assetsValue": 252
                },
                {
                    "year": 2020,
                    "month": 6,
                    "profitOrLoss": 190,
                    "assetsValue": 221
                },
                {
                    "year": 2020,
                    "month": 5,
                    "profitOrLoss": 210,
                    "assetsValue": 2152
                },
                {
                    "year": 2020,
                    "month": 4,
                    "profitOrLoss": 980,
                    "assetsValue": 2452
                },
                {
                    "year": 2020,
                    "month": 3,
                    "profitOrLoss": 10,
                    "assetsValue": 242
                },
                {
                    "year": 2020,
                    "month": 2,
                    "profitOrLoss": 181,
                    "assetsValue": 2241
                },
                {
                    "year": 2020,
                    "month": 1,
                    "profitOrLoss": 80,
                    "assetsValue": 2132
                }
            ]
    },
    "XYZ Industries": {
        "established": 2020,
        "name": "XYZ Industries",
        "balanceSheet": [
            {
                "year": 2020,
                "month": 12,
                "profitOrLoss": 2510,
                "assetsValue": 34
            },
            {
                "year": 2020,
                "month": 11,
                "profitOrLoss": 10,
                "assetsValue": 59
            },
            {
                "year": 2020,
                "month": 10,
                "profitOrLoss": 250,
                "assetsValue": 245
            },
            {
                "year": 2020,
                "month": 9,
                "profitOrLoss": -100,
                "assetsValue": 2252
            },
            {
                "year": 2020,
                "month": 8,
                "profitOrLoss": 180,
                "assetsValue": 2122
            },
            {
                "year": 2020,
                "month": 7,
                "profitOrLoss": 741,
                "assetsValue": 252
            },
            {
                "year": 2020,
                "month": 6,
                "profitOrLoss": 190,
                "assetsValue": 221
            },
            {
                "year": 2020,
                "month": 5,
                "profitOrLoss": 210,
                "assetsValue": 2152
            },
            {
                "year": 2020,
                "month": 4,
                "profitOrLoss": 980,
                "assetsValue": 2452
            },
            {
                "year": 2020,
                "month": 3,
                "profitOrLoss": 10,
                "assetsValue": 242
            },
            {
                "year": 2020,
                "month": 2,
                "profitOrLoss": 181,
                "assetsValue": 2241
            },
            {
                "year": 2020,
                "month": 1,
                "profitOrLoss": 80,
                "assetsValue": 2132
            }
        ]
    },
    "Kazi Enterprise": {
        "established": 2020,
        "name": "Kazi Enterprise",
        "balanceSheet": [
            {
                "year": 2020,
                "month": 12,
                "profitOrLoss": 21200,
                "assetsValue": 124
            },
            {
                "year": 2020,
                "month": 11,
                "profitOrLoss": -110,
                "assetsValue": 579
            },
            {
                "year": 2020,
                "month": 10,
                "profitOrLoss": -250,
                "assetsValue": 245
            },
            {
                "year": 2020,
                "month": 9,
                "profitOrLoss": -700,
                "assetsValue": 252
            },
            {
                "year": 2020,
                "month": 8,
                "profitOrLoss": 180,
                "assetsValue": 2122
            },
            {
                "year": 2020,
                "month": 7,
                "profitOrLoss": 741,
                "assetsValue": 252
            },
            {
                "year": 2020,
                "month": 6,
                "profitOrLoss": 190,
                "assetsValue": 221
            },
            {
                "year": 2020,
                "month": 5,
                "profitOrLoss": 210,
                "assetsValue": 2152
            },
            {
                "year": 2020,
                "month": 4,
                "profitOrLoss": 980,
                "assetsValue": 2452
            },
            {
                "year": 2020,
                "month": 3,
                "profitOrLoss": 10,
                "assetsValue": 242
            },
            {
                "year": 2020,
                "month": 2,
                "profitOrLoss": 181,
                "assetsValue": 2241
            },
            {
                "year": 2020,
                "month": 1,
                "profitOrLoss": 80,
                "assetsValue": 2132
            }
        ]
    },
    "Tanvir Industries": {
        "established": 2020,
        "name": "Tanvir Industries",
        "balanceSheet": [
            {
                "year": 2020,
                "month": 12,
                "profitOrLoss": 25200,
                "assetsValue": 124
            },
            {
                "year": 2020,
                "month": 11,
                "profitOrLoss": -1150,
                "assetsValue": 579
            },
            {
                "year": 2020,
                "month": 10,
                "profitOrLoss": 367,
                "assetsValue": 2345
            },
            {
                "year": 2020,
                "month": 9,
                "profitOrLoss": -189,
                "assetsValue": 22342
            },
            {
                "year": 2020,
                "month": 8,
                "profitOrLoss": 180,
                "assetsValue": 2122
            },
            {
                "year": 2020,
                "month": 7,
                "profitOrLoss": 741,
                "assetsValue": 252
            },
            {
                "year": 2020,
                "month": 6,
                "profitOrLoss": 190,
                "assetsValue": 221
            },
            {
                "year": 2020,
                "month": 5,
                "profitOrLoss": 210,
                "assetsValue": 2152
            },
            {
                "year": 2020,
                "month": 4,
                "profitOrLoss": 980,
                "assetsValue": 2452
            },
            {
                "year": 2020,
                "month": 3,
                "profitOrLoss": 10,
                "assetsValue": 242
            },
            {
                "year": 2020,
                "month": 2,
                "profitOrLoss": 181,
                "assetsValue": 2241
            },
            {
                "year": 2020,
                "month": 1,
                "profitOrLoss": 80,
                "assetsValue": 2132
            }
        ]
    }
};

module.exports = balanceSheet;