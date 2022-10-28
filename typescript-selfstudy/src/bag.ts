import { Present } from "./present";
import { BagType } from "./bagType";


export class Bag {
    maxWeight: number;
    bag: BagType;
    presents: Present[] =[]

    constructor (maxWeight: number, bag: BagType) {
        this.maxWeight = maxWeight;
        this.bag = bag;
        this.presents = [];
        
    }

    addPresent(present:Present) {
        this.presents.push(present);
    }
};

