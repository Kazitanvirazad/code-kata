
const SubmitButton = (buttonData) => {
    return (
        <>
            <div className="p-2">
                <button type="button" className={buttonData.buttonClass} onClick={buttonData.submit}>{buttonData.buttonText}</button>
            </div>
        </>
    );
};

export default SubmitButton;