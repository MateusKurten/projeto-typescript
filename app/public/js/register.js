const createUser = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const country = document.getElementById('country').value

    const response = await fetch(`${window.location.origin}/users/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name,
            country
        })
    })

    if (response.ok) {
        const json = await response.json();
        alert("User created successfully. Redirecting to chat page...");
        window.localStorage.setItem("user", JSON.stringify(json));
        window.location.href = `${window.location.origin}/`;
    } else {
        alert("Sign up failed!");
    }
}

loadCountries = async () => {
    try {
        const response = await fetch(`${window.location.origin}/countries`);
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const json = await response.json();

        const countrySelect = document.getElementById('country');

        json.result.forEach(country => {
            const option = document.createElement('option');
            option.value = country.id;
            option.text = country.name;
            countrySelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', loadCountries);