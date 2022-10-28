"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
class Bag {
    constructor(maxWeight, bag) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bag = bag;
        this.presents = [];
    }
    addPresent(present) {
        this.presents.push(present);
    }
}
exports.Bag = Bag;
;
//# sourceMappingURL=bag.js.map