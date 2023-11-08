"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonService = void 0;
class UpdatePersonService {
    constructor(_personRepositoryPort) {
        this._personRepositoryPort = _personRepositoryPort;
    }
    async updatePerson(command) {
        const person = await this._personRepositoryPort.loadPerson(command.personId);
        person.updateComments(command.comments);
        await this._personRepositoryPort.update(person);
        return person;
    }
}
exports.UpdatePersonService = UpdatePersonService;
//# sourceMappingURL=update-person.service.js.map