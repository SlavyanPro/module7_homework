class ElectricaAppliance {
    constructor(type, model, power) {
        this.type = type;
        this.model = model;
        this.power = power;
        this.isOffOn = false;
    }

    on() {
        console.log(`The ${this.type} ${this.model} is on`);
        this.isOffOn = true;
    }

    off() {
        console.log(`The ${this.type} ${this.model} is off`);
        this.isOffOn = false;
    }

    totalPower() {
        if (this.isOffOn) return this.power;
        else return 0;
    }
}

const lampa = new ElectricaAppliance('Lampa', 'tabletop', 95);
const pc = new ElectricaAppliance('Pc', 'stationary', 800);
const tv = new ElectricaAppliance('TV', 'LG', 1000);

lampa.on();
pc.on();
tv.off();

console.log(`Total power = ${lampa.totalPower() + pc.totalPower() + tv.totalPower()} watt`);
