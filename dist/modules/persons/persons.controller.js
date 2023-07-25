"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsController = void 0;
const common_1 = require("@nestjs/common");
const persons_repository_1 = require("./persons.repository");
const swagger_1 = require("@nestjs/swagger");
const update_person_use_case_1 = require("../../domains/ports/in/update-person.use-case");
const create_person_dto_1 = require("./dto/create-person.dto");
const update_person_dto_1 = require("./dto/update-person.dto");
const update_person_command_1 = require("../../domains/ports/in/update-person.command");
let PersonsController = exports.PersonsController = class PersonsController {
    constructor(_updatePersonUseCase, _personsRepository) {
        this._updatePersonUseCase = _updatePersonUseCase;
        this._personsRepository = _personsRepository;
    }
    getAll() {
        return this._personsRepository.getAll();
    }
    getOne(id) {
        return this._personsRepository.getOneById(id);
    }
    delete(id) {
        return this._personsRepository.delete(id);
    }
    create(dto) {
        return this._personsRepository.create(dto);
    }
    async update(id, dto) {
        const command = new update_person_command_1.UpdatePersonCommand(id, dto.comments);
        const updatedPerson = await this._updatePersonUseCase.UpdatePerson(command);
        return await this._personsRepository.update(updatedPerson);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonOrmDto]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_person_dto_1.UpdatePersonOrmDto]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "update", null);
exports.PersonsController = PersonsController = __decorate([
    (0, common_1.Controller)('persons'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Persons'),
    __param(0, (0, common_1.Inject)(update_person_use_case_1.UpdatePersonUseCaseSymbol)),
    __metadata("design:paramtypes", [Object, persons_repository_1.PersonsRepository])
], PersonsController);
//# sourceMappingURL=persons.controller.js.map