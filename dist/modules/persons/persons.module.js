"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const person_orm_entity_1 = require("./entities/person-orm.entity");
const persons_controller_1 = require("./persons.controller");
const persons_repository_1 = require("./persons.repository");
const update_person_use_case_1 = require("../../domains/ports/in/update-person.use-case");
const update_person_service_1 = require("../../domains/services/update-person.service");
const comments_module_1 = require("../comments/comments.module");
let PersonsModule = exports.PersonsModule = class PersonsModule {
};
exports.PersonsModule = PersonsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: person_orm_entity_1.Person.name, schema: person_orm_entity_1.PersonSchema }]),
            comments_module_1.CommentsModule,
        ],
        controllers: [persons_controller_1.PersonsController],
        exports: [persons_repository_1.PersonsRepository],
        providers: [
            persons_repository_1.PersonsRepository,
            {
                provide: update_person_use_case_1.UpdatePersonUseCaseSymbol,
                useClass: update_person_service_1.UpdatePersonService,
            },
            {
                provide: update_person_use_case_1.UpdatePersonUseCaseSymbol,
                useFactory: (_personRepository) => {
                    return new update_person_service_1.UpdatePersonService(_personRepository);
                },
                inject: [persons_repository_1.PersonsRepository],
            },
        ],
    })
], PersonsModule);
//# sourceMappingURL=persons.module.js.map