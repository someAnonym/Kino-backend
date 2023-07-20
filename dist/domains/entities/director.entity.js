"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorEntity = void 0;
class DirectorEntity {
    constructor(_id, _name, _secondName, _picture) {
        this._id = _id;
        this._name = _name;
        this._secondName = _secondName;
        this._picture = _picture;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get secondName() {
        return this._secondName;
    }
    get picture() {
        return this._picture;
    }
}
exports.DirectorEntity = DirectorEntity;
//# sourceMappingURL=director.entity.js.map