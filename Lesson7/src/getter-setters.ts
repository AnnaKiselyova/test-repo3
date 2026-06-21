interface State3 {
    name1: string;
    name2: string;
    name3: string;
}

interface WaterProperties {
    state1: string;
    state2: string;
    state3: State3;
}

interface Water {
    propertiesOfWater: WaterProperties;

    state1: string;
    state3Name2: string;

    getSummary(): string;
}

const water: Water = {
    propertiesOfWater: {
        state1: 'liquid',
        state2: 'gas',
        state3: {
            name1: 'snowflake',
            name2: 'ice',
            name3: 'snow'
        }
    },

    get state1(): string {
        return this.propertiesOfWater.state1;
    },

    set state1(value: string) {
        this.propertiesOfWater.state1 = value;
    },

    get state3Name2(): string {
        return this.propertiesOfWater.state3.name2;
    },

    set state3Name2(value: string) {
        this.propertiesOfWater.state3.name2 = value;
    },

    getSummary(): string {
        return `Water can exist as ${this.propertiesOfWater.state1}, ${this.propertiesOfWater.state2}, and ${this.propertiesOfWater.state3.name2}`;
    }
};

console.log(water.getSummary());

water.state1 = 'supercritical fluid';
water.state3Name2 = 'glacier';

console.log(water.state1);
console.log(water.state3Name2);
console.log(water.getSummary());
