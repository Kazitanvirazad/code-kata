import FormSelectOptionData from "./FormSelectOptionData";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import OutcomeModal from "./OutcomeModal";
import FormElement from "./FormElement";
import BalanceSheetTableBody from "./BalanceSheetTableBody";
import BalanceSheetTableHeader from "./BalanceSheetTableHeader";
import Service from "./Service";
import BusinessNames from "./BusinessNames";

let requestData = {};

const LoanFormPage = () => {

    const formData = [
        { isTextBox: true, isRequired: true, name: "Business Name", id: "business_name" },
        { isSelectTag: true, isMulti: false, name: "Accounting Providers", option: "providers", id: "providers" },
        { isTextBox: true, isRequired: true, name: "Loan Amount", id: "loan_amount" }
    ];

    const serviceConfig = {
        balancesheetURI: import.meta.env.VITE_REQUESTBALANCESHEET_API,
        submitLoanApplicationURI: import.meta.env.VITE_SUBMITLOANREQUEST_API
    };

    const [balanceData, setBalanceData] = useState([]);

    const [outcomeData, setOutcomeData] = useState();

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        requestData[name] = value;
    };

    const handleSelectChange = (event) => {
        const name = event?.name;
        const value = event?.value;
        requestData[name] = value;
    };

    const requestBalanceSheet = (event) => {
        event.preventDefault();
        let businessName = requestData["business_name"];
        let accountProvider = requestData["providers"];
        let queryString = `?businessName=${businessName}&accountProvider=${accountProvider}`;
        let url = import.meta.env.VITE_HOSTNAME + serviceConfig.balancesheetURI + queryString;
        if ("business_name" in requestData && "providers" in requestData
            && requestData.business_name && requestData.providers) {
            Service(url, import.meta.env.VITE_REQUESTBALANCESHEET_METHOD, null,
                (data) => {
                    if (data && "sheet" in data && data.sheet) {
                        if (data.sheet.length < 1) {
                            alert("Invalid input");
                            setBalanceData([]);
                            setOutcomeData(null);
                        } else {
                            data.sheet.sort((a, b) => (a.month < b.month ? -1 : 1));
                            setBalanceData(data.sheet);
                            setOutcomeData(null);
                        }
                    }
                }, (err) => {
                    alert("Something went wrong!");
                });
        } else {
            alert("Business Name and Accounting Providers fields must have values");
        }
    };

    const submitLoanApplicationForm = (event) => {
        event.preventDefault();
        let businessName = requestData["business_name"];
        let accountProvider = requestData["providers"];
        let loanAmount = requestData["loan_amount"];
        let url = import.meta.env.VITE_HOSTNAME + serviceConfig.submitLoanApplicationURI;
        let body = {
            businessName: businessName,
            accountProvider: accountProvider,
            loanAmount: loanAmount
        };
        if ("business_name" in requestData && "providers" in requestData
            && "loan_amount" in requestData && requestData.loan_amount
            && requestData.business_name && requestData.providers) {
            Service(url, import.meta.env.VITE_SUBMITLOANREQUEST_METHOD, body,
                (data) => {
                    if (data) {
                        if (data.error) {
                            alert(data.errMessage);
                        } else {
                            setOutcomeData(data);
                        }
                    }
                }, (err) => {
                    alert("Server error!");
                });
        } else {
            alert("Business Name, Accounting Providers and Loan Amount fields must have values");
        }
    };

    let options = FormSelectOptionData();

    return (
        <>
            <div className="container">
                <BusinessNames />
                <FormElement formData={formData} handleChange={handleChange}
                    handleSelectChange={handleSelectChange} requestBalanceSheetHandler={requestBalanceSheet}
                    options={options} />

                <div className="p-1">
                    {balanceData.length > 0 && <table className="table table-striped table-bordered">
                        <BalanceSheetTableHeader />
                        <BalanceSheetTableBody balanceData={balanceData} />
                    </table>}
                    {outcomeData ? <OutcomeModal data={outcomeData} /> : balanceData.length > 0 ? <SubmitButton submit={submitLoanApplicationForm} buttonClass="btn btn-primary" buttonText="Review and Submit" /> : ""}
                </div>
            </div>
        </>
    );
};

export default LoanFormPage;