function fetchDogFacts(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            processFacts(data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

function processFacts(data) {
    const facts = data.data;

    console.log('Dog facts:');
    facts.forEach(fact => {
        console.log(`- ${fact.attributes.body}`);
    });
}
fetchDogFacts('https://dogapi.dog/api/v2/facts');
