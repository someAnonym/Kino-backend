"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesModule = void 0;
const common_1 = require("@nestjs/common");
const quotes_controller_1 = require("./quotes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const quotes_repository_1 = require("./quotes.repository");
const quote_orm_entity_1 = require("./entities/quote-orm.entity");
let QuotesModule = exports.QuotesModule = class QuotesModule {
};
exports.QuotesModule = QuotesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: quote_orm_entity_1.Quote.name, schema: quote_orm_entity_1.QuoteSchema }])],
        controllers: [quotes_controller_1.QuotesController],
        providers: [quotes_repository_1.QuotesRepository],
    })
], QuotesModule);
//# sourceMappingURL=quotes.module.js.map