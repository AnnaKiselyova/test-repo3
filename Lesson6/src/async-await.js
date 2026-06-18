async function fetchDogFacts(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        processFacts(data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

function processFacts(data) {
    const facts = data.data;

    console.log('Dog facts:');
    facts.forEach(fact => {
        console.log(`- ${fact.attributes.body}`);
    });
}

fetchDogFacts('https://dogapi.dog/api/v2/facts');
