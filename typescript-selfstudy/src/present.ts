import { BagType } from "./bagType";
import { Bag } from "./bag";
import { PresentType } from "./presentType";


// class Present
export class Present {
    name: string;
    // get presentName() {
    //     return this.name;
    // }
    weight: number;
    PresentType: PresentType;

// constructor
    constructor (PresentType: PresentType, _presentname: string,  weight: number) {
    this.PresentType = PresentType;
    this.name = _presentname;
    this.weight = weight
}
//function 
disp():void { 
    console.log("Present is  :   " + this.name + this.PresentType + " " + this.weight)
}
};