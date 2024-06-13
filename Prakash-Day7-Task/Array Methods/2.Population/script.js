document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Get all the countries with a population of less than 2 lakhs using Filter method
            const smallPopulationCountries = data.filter(country => country.population < 200000);
            console.log("Countries with population less than 2 lakhs:", smallPopulationCountries);

            // Displaying each country name and population in the console
            smallPopulationCountries.forEach(country => {
                console.log(`Name: ${country.name.common}, Population: ${country.population}`);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
