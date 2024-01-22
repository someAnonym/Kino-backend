"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const awards_controller_1 = require("./awards.controller");
const awards_repository_1 = require("./awards.repository");
const award_entity_1 = require("./entities/award.entity");
let AwardModule = exports.AwardModule = class AwardModule {
};
exports.AwardModule = AwardModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: award_entity_1.Award.name, schema: award_entity_1.AwardSchema }])],
        controllers: [awards_controller_1.AwardsController],
        exports: [awards_repository_1.AwardsRepository],
        providers: [awards_repository_1.AwardsRepository],
    })
], AwardModule);
//# sourceMappingURL=awards.module.js.map