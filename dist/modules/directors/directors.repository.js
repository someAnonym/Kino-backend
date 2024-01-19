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
exports.DirectorsRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const director_orm_entity_1 = require("./entities/director-orm.entity");
const mongoose_2 = require("mongoose");
let DirectorsRepository = exports.DirectorsRepository = class DirectorsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    deleteDirector(directorId) {
        return this.repository.findByIdAndDelete(directorId);
    }
    createDirector(dto) {
        return this.repository.create(dto);
    }
    getAll() {
        return this.repository.find();
    }
    getDirecorById(directorId) {
        return this.repository.findById(directorId);
    }
};
exports.DirectorsRepository = DirectorsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(director_orm_entity_1.Director.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DirectorsRepository);
//# sourceMappingURL=directors.repository.js.map