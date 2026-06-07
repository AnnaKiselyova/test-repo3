const water = {
    propertiesOfWater: {
        state1: 'liquid',
        state2: 'gas',
        state3: {
            name1: 'snowflake',
            name2: 'ice',
            name3: 'snow'
        }
    },

    get states() {
        return this.propertiesOfWater;
    },

    set updateLiquid(newValue) {
        if (typeof newValue === 'string') {
            this.propertiesOfWater.state1 = newValue;
        }
    },

    set updateSolid(newValue) {
        if (typeof newValue === 'string') {
            this.propertiesOfWater.state3.name2 = newValue;
        }
    },

    getSummary() {
        return `Water can exist as ${this.propertiesOfWater.state1}, ${this.propertiesOfWater.state2} and ${this.propertiesOfWater.state3.name1}.`;
    }
};

console.log(water.states);

water.updateLiquid = 'super liquid';
water.updateSolid = 'crystal ice';

console.log(water.states);
console.log(water.getSummary());
