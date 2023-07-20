"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPasswordCommand = void 0;
class UpdateUserPasswordCommand {
    constructor(_userId, _password) {
        this._userId = _userId;
        this._password = _password;
    }
    get userId() {
        return this._userId;
    }
    get password() {
        return this._password;
    }
}
exports.UpdateUserPasswordCommand = UpdateUserPasswordCommand;
//# sourceMappingURL=update-user-password.command.js.map