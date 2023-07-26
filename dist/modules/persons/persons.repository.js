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
exports.PersonsRepository = void 0;
const common_1 = require("@nestjs/common");
const person_orm_entity_1 = require("./entities/person-orm.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const person_mapper_1 = require("./person.mapper");
let PersonsRepository = exports.PersonsRepository = class PersonsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async search(query) {
        const persons = await this.repository.find();
        return [
            ...persons.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())),
            ...persons.filter((i) => i.englishName.toLowerCase().includes(query.toLowerCase())),
        ];
    }
    async update(person) {
        try {
            const mongoose = require('mongoose');
            const updatedPerson = person.getData();
            const currentPerson = await this.repository.findById(person.id);
            for (let i = 0; i < currentPerson.comments.length; i++) {
                currentPerson.comments[i] = mongoose.Types.ObjectId(updatedPerson.comments[i]);
            }
            return this.repository.findOneAndUpdate(currentPerson._id, currentPerson);
        }
        catch (error) {
            throw new common_1.ForbiddenException('Ошибка при обновлении Актера', error);
        }
    }
    delete(PersonId) {
        return this.repository.findByIdAndDelete(PersonId);
    }
    getAll() {
        return this.repository.find();
    }
    getOneById(id) {
        return this.repository.findById(id);
    }
    create(dto) {
        return this.repository.create(dto);
    }
    async loadPerson(personId) {
        const person = await this.repository.findById(personId);
        return person_mapper_1.PersonMapper.mapToDomain(person);
    }
};
exports.PersonsRepository = PersonsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(person_orm_entity_1.Person.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PersonsRepository);
//# sourceMappingURL=persons.repository.js.map