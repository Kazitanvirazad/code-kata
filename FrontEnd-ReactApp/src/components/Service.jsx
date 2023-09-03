
const Service = (url, method, body, successCallback, errorCallBack) => {
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: body ? JSON.stringify(body) : null
    }).then(response => {
        return response.json()
    }).then(successCallback).catch(errorCallBack);
};

export default Service;