"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const card_orm_entity_1 = require("./entities/card-orm.entity");
const cards_controller_1 = require("./cards.controller");
const cards_repository_1 = require("./cards.repository");
const update_card_service_1 = require("../../domains/services/update-card.service");
const update_card_use_case_1 = require("../../domains/ports/in/update-card.use-case");
const reviews_module_1 = require("../reviews/reviews.module");
let CardsModule = exports.CardsModule = class CardsModule {
};
exports.CardsModule = CardsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: card_orm_entity_1.Card.name, schema: card_orm_entity_1.CardSchema }]), reviews_module_1.ReviewsModule],
        controllers: [cards_controller_1.CardsController],
        exports: [cards_repository_1.CardsRepository],
        providers: [
            cards_repository_1.CardsRepository,
            {
                provide: update_card_use_case_1.UpdateCardUseCaseSymbol,
                useClass: update_card_service_1.UpdateCardService,
            },
            {
                provide: update_card_use_case_1.UpdateCardUseCaseSymbol,
                useFactory: (_cardRepository) => {
                    return new update_card_service_1.UpdateCardService(_cardRepository);
                },
                inject: [cards_repository_1.CardsRepository],
            },
        ],
    })
], CardsModule);
//# sourceMappingURL=cards.module.js.map