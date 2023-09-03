import LoanFormPage from "./LoanFormPage";

const Home = () => {
    return (
        <>
            <div className="container text-center">
                <h2>Welcome to DemystData Coding Challenge</h2>
                <h3>Candidate Name: Kazi Tanvir Azad</h3>
                <div className="d-grid w-50 p-3 mx-auto gap-3">
                    <a href="https://www.linkedin.com/in/kazitanvirazad" target="_blank" className="btn btn-info" role="button">LinkedIn Profile</a>
                    <a href="https://github.com/Kazitanvirazad" target="_blank" className="btn btn-info" role="button">GitHub Repository</a>
                </div>
            </div>
            <LoanFormPage />
        </>
    );
};

export default Home;