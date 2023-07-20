"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardEntity = void 0;
class AwardEntity {
    constructor(_id, _picture, _name, _description, _year) {
        this._id = _id;
        this._picture = _picture;
        this._name = _name;
        this._description = _description;
        this._year = _year;
    }
    get picture() {
        return this._picture;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get year() {
        return this._year;
    }
}
exports.AwardEntity = AwardEntity;
//# sourceMappingURL=award.entity.js.map