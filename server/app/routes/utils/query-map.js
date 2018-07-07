const config = require('../../config');

function getPercentStr(str, brackets) {
    str = str || '';

    const percentSign = '%';
    let res = str + percentSign;

    if (brackets) {
        res = '(' + res + ')';
    }

    return res;
}

function getDollarStr(str) {
    const percentSign = '$';

    str = str || '';

    return str + percentSign;
}

module.exports = function(query) {
    return {
        email: query.email,
        author: query.author,
        incomes: [
            {
                cells: [
                    {
                        value: 'Units rented'
                    },
                    {
                        numeric: true,
                        value: query[config.get('names:monthRented')]
                    },
                    {
                        value: ''
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Rent cost per unit'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthRentCost')])
                    },
                    {
                        value: ''
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Total operating income'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthTotalIncome')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearTotalIncome')])
                    }
                ]
            }
        ],
        expenses: [
            {
                cells: [
                    {
                        value: 'Vacancy factor ' + getPercentStr(query[config.get('names:vacancyFactor')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthVacancyFactor')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearVacancyFactor')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Management fee ' + getPercentStr(query[config.get('names:managementFee')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthManagementFee')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearManagementFee')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Maintenance and supplies ' + getPercentStr(query[config.get('names:maintenance')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthMaintenance')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearMaintenance')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Utilities'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthUtilities')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearUtilities')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Hazard insurance ' + getPercentStr(query[config.get('names:hazardInsurance')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthHazardInsurance')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearHazardInsurance')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Taxes ' + getPercentStr(query[config.get('names:taxes')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthTaxes')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearTaxes')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Mortgage insurance ' + getPercentStr(query[config.get('names:mortgageInsurance')], true)
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthMortgageInsurance')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearMortgageInsurance')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Total operating expenses'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthTotalExpenses')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearTotalExpenses')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Net operating income'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthProfit')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearProfit')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Mortgage payment'
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthMortgagePayment')])
                    },
                    {
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearMortgagePayment')])
                    }
                ]
            }
        ],
        loanDetails: [
            {
                cells: [
                    {
                        value: 'Purchase price'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:purchasePrice')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Repair cost'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:repairCost')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Down payment ' + getPercentStr(query[config.get('names:downPaymentPercent')], true)
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:downPayment')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Closing costs'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:miscClosingCosts')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Loan amount'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:loanAmount')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Interest rate'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getPercentStr(query[config.get('names:interestRate')], false)
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Term'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: query[config.get('names:term')] + ' years'
                    }
                ]
            }
        ],
        results: [
            {
                cells: [
                    {
                        res: true,
                        value: 'Cash flow'
                    },
                    {
                        res: true,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:monthCashFlow')])
                    },
                    {
                        res: true,
                        numeric: true,
                        value: getDollarStr(query[config.get('names:yearCashFlow')])
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Return on investment'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getPercentStr(query[config.get('names:roi')], false)
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Cap rate'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getPercentStr(query[config.get('names:capRate')], false)
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Debt coverage ratio'
                    },
                    {
                        col: 2,
                        numeric: true,
                        value: getPercentStr(query[config.get('names:dscr')], false)
                    }
                ]
            },
        ]
    }
};
