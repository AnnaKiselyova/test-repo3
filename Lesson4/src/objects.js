console.log('---- TOWNS ----');

const towns = {
    country: 'Ukraine',

    capital: [
        {
            name: 'Kyiv',
            region: 'Kyiv region',

            details: {
                population: 2900000,
                isCapital: true
            }
        }],

    town: [
        {
            name: 'Lviv',
            region: 'Lviv region',
            details: {
                population: 720000,
                isCapital: false
            }
        },
        {
            name: 'Odessa',
            region: 'Odessa region',
            details: {
                population: 1000000,
                isCapital: false
            }
        }
    ],

    printTowns() {
        const allTowns = [...this.capital, ...this.town];

        allTowns.forEach((town) => {
            console.log(
                `${town.name} (${town.region}) - Population: ${town.details.population}`
            );
        });
    }
};

towns.printTowns();
