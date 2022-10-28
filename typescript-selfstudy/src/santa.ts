import { BagType } from "./bagType";
import { Bag } from "./bag";
import { PresentType } from "./presentType";
import { Present } from "./present";

export class Santa {
    StringName: string;
    intAge: number;

    constructor ( StringName: string, intAge: number) {
        this.StringName = StringName;
        this.intAge = intAge;
    }
};