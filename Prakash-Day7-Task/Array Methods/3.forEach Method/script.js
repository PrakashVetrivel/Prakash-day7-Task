document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Print the following details name, capital, flag, using forEach method
            data.forEach(country => {
                const countryName = country.name.common;
                const countryCapital = country.capital ? country.capital[0] : 'No capital';
                const countryFlag = country.flags && country.flags.svg ? country.flags.svg : 'No flag available';
                console.log(`Name: ${countryName}, Capital: ${countryCapital}, Flag: ${countryFlag}`);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
