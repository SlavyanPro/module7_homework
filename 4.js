function ElectricaAppliance(type, model, power) {
    this.type = type;
    this.model = model;
    this.power = power;
    this.isOffOn = false
}

ElectricaAppliance.prototype.on = function() {
    console.log(`The ${this.type} ${this.model} is on`);
    this.isOffOn = true;
};

ElectricaAppliance.prototype.off = function() {
    console.log(`The ${this.type} ${this.model} is off`);
    this.isOffOn = false;
};

ElectricaAppliance.prototype.totalPower = function() {
    if (this.isOffOn) return this.power;
    else return 0;
}

const lampa = new ElectricaAppliance('Lampa', 'tabletop', 95);
const pc = new ElectricaAppliance('Pc', 'stationary', 800);
const tv = new ElectricaAppliance('TV', 'LG', 1000);

lampa.on();
pc.off();
tv.on();

console.log(`Total power = ${lampa.totalPower() + pc.totalPower() + tv.totalPower()} watt`);
