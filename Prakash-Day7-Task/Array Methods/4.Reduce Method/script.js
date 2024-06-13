document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Print the total population of countries using reduce method
            const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
            console.log("Total Population:", totalPopulation);
        })
        .catch(error => console.error('Error fetching data:', error));
});
