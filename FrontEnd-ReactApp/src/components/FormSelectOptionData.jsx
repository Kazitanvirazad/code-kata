
const FormSelectOptionData = () => {

    let url = import.meta.env.VITE_HOSTNAME + import.meta.env.VITE_PROVIDERS_API;

    let options = {
        providers: []
    };

    let addOption = (data) => {
        if ("providers" in data && data.providers && data.providers.length > 0) {
            data.providers.map(provider => {
                options.providers.push({ "value": provider.provider, "label": provider.provider, 'name': 'providers', 'attribute': 'providers' });
            });
        }
    };

    if (options.providers.length < 1) {
        fetch(
            url, {
            method: import.meta.env.VITE_PROVIDERS_METHOD,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
        ).then(response => {
            return response.json();
        }).then(data => {
            if (data) {
                addOption(data);
                return options;
            } else {
                alert("Something went wrong!");
            }
        }).catch(err => {
            alert("Server Error!");
        });

        return options;
    };
}
export default FormSelectOptionData;