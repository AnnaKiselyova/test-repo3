async function fetchWithFallback() {
    const wrongUrl = 'https://dogapi.dog/api/v2/wrong-endpoint';
    const correctUrl = 'https://dogapi.dog/api/v2/facts';

    try {
        console.log('Trying wrong URL...');
        const response = await fetch(wrongUrl);

        if (!response.ok) {
            throw new Error('Main request failed');
        }

        const data = await response.json();
        console.log('Main data:', data);

    } catch (error) {
        console.error('Error:', error.message);

        console.log('Trying fallback URL...');

        try {
            const fallbackResponse = await fetch(correctUrl);

            if (!fallbackResponse.ok) {
                throw new Error(`Fallback request failed: ${fallbackResponse.status}`, {
                    cause: error
                });
            }


            const fallbackData = await fallbackResponse.json();
            const facts = fallbackData.data;

            console.log('Fallback dog facts:');
            facts.forEach((fact) => {
                console.log(`- ${fact.attributes.body}`);
            });

        } catch (fallbackError) {
            throw new Error('Both main and fallback requests failed', {
                cause: fallbackError
            });
        }
    }
}

fetchWithFallback();
