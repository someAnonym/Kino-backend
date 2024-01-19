"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorsModule = void 0;
const common_1 = require("@nestjs/common");
const directors_controller_1 = require("./directors.controller");
const directors_repository_1 = require("./directors.repository");
const mongoose_1 = require("@nestjs/mongoose");
const director_orm_entity_1 = require("./entities/director-orm.entity");
let DirectorsModule = exports.DirectorsModule = class DirectorsModule {
};
exports.DirectorsModule = DirectorsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: director_orm_entity_1.Director.name, schema: director_orm_entity_1.DirectorSchema }])],
        controllers: [directors_controller_1.DirectorsController],
        providers: [directors_repository_1.DirectorsRepository],
    })
], DirectorsModule);
//# sourceMappingURL=directors.module.js.map