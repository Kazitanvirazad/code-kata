import Select from "react-select";
import SubmitButton from "./SubmitButton";

const FormElement = (data) => {
    return (
        <>
            <form>
                {data.formData.map((item, index) => {
                    if (item.isTextBox) {
                        return (
                            <>
                                <div className="mb-3" key={index}>
                                    <label className="form-label" htmlFor={item.id}>{item.name}</label>
                                    <input className="form-control" onChange={data.handleChange} placeholder={"Enter " + item.name} type="text" name={item.id} defaultValue="" id={item.id} required={item.isRequired} />
                                </div>
                            </>
                        )
                    }
                    if (item.isSelectTag) {
                        return (
                            <>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor={item.id}>{"Select " + item.name}</label>
                                    <Select
                                        className="form-control"
                                        id={item.id}
                                        onChange={data.handleSelectChange}
                                        isMulti={item.isMulti}
                                        options={data.options[item.option]}
                                        placeholder={"Choose " + item.name}
                                        required
                                    />
                                </div>
                            </>
                        )
                    }
                })}
                <SubmitButton submit={data.requestBalanceSheetHandler} buttonClass="btn btn-primary" buttonText="Request Balance Sheet" />
            </form>
        </>
    );
};

export default FormElement;