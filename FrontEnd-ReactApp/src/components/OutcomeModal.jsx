import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SubmitButton from './SubmitButton';

const OutcomeModal = (inputData) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <SubmitButton submit={handleShow} buttonClass="btn btn-success" buttonText="View Outcome" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Loan Application Outcome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <p><span><b>Approved Loan Amount: </b>{inputData.data.decisionOutcome.approvedLoanAmount}</span></p>
                        <p><span><b>Business Name: </b>{inputData.data.decisionOutcome.businessDetails.businessName}</span></p>
                        <p><span><b>Established Year: </b>{inputData.data.decisionOutcome.businessDetails.established}</span></p>
                        <p><span><b>Accounting Provider: </b>{inputData.data.decisionOutcome.businessDetails.accountProvider}</span></p>
                        <p><span><b>Pre-Assessment Value: </b>{inputData.data.decisionOutcome.preAssessment}</span></p>
                        <p><span><b>Requested Loan Amount: </b>{inputData.data.decisionOutcome.businessDetails.loanAmount}</span></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default OutcomeModal;