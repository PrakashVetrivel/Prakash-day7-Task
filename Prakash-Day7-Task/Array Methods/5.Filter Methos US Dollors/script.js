document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Print the country that uses US dollars as currency
            const countriesUsingUSD = data.filter(country => {
                if (country.currencies) {
                    return Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
                }
                return false;
            });

            countriesUsingUSD.forEach(country => {
                console.log(`Country: ${country.name.common}, Currency: US Dollar`);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
