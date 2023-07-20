"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPasswordService = void 0;
class UpdateUserPasswordService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async updateUserPassword(command) {
        const user = await this._userRepository.loadUser(command.userId);
        user.updatePassword(command.password);
        await this._userRepository.updateUser(user);
        return user;
    }
}
exports.UpdateUserPasswordService = UpdateUserPasswordService;
//# sourceMappingURL=update-user-password.service.js.map