class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    } 

    plugIn(){
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }  

    getPowerUsed(){
        return this.isPlugged ? this.power : 0;
    }
}

const lampa = new ElectricalAppliance('lampa', 45);
const pc = new ElectricalAppliance('pc', 1000);

console.log(lampa.getPowerUsed() + pc.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + pc.getPowerUsed());

pc.plugIn();
console.log(lampa.getPowerUsed() + pc.getPowerUsed());