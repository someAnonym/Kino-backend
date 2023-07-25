"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonCommand = void 0;
class UpdatePersonCommand {
    constructor(_personId, _comments) {
        this._personId = _personId;
        this._comments = _comments;
    }
    get personId() {
        return this._personId;
    }
    get comments() {
        return this._comments;
    }
}
exports.UpdatePersonCommand = UpdatePersonCommand;
//# sourceMappingURL=update-person.command.js.map