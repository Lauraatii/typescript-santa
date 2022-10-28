"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
class Present {
    constructor(PresentType, _presentname, weight) {
        this.PresentType = PresentType;
        this.name = _presentname;
        this.weight = weight;
    }
    disp() {
        console.log("Present is  :   " + this.name + this.PresentType + " " + this.weight);
    }
}
exports.Present = Present;
;
//# sourceMappingURL=present.js.map