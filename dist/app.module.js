"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./modules/users/users.module");
const config_1 = require("@nestjs/config");
const files_module_1 = require("./modules/files/files.module");
const auth_module_1 = require("./modules/auth/auth.module");
const cards_module_1 = require("./modules/card/cards.module");
const awards_module_1 = require("./modules/awards/awards.module");
const persons_module_1 = require("./modules/persons/persons.module");
const reviews_module_1 = require("./modules/reviews/reviews.module");
const comments_module_1 = require("./modules/comments/comments.module");
const directors_module_1 = require("./modules/directors/directors.module");
const ratings_module_1 = require("./modules/ratings/ratings.module");
const quotes_module_1 = require("./modules/quotes/quotes.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_HOST),
            users_module_1.UsersModule,
            files_module_1.FilesModule,
            auth_module_1.AuthModule,
            cards_module_1.CardsModule,
            awards_module_1.AwardModule,
            persons_module_1.PersonsModule,
            reviews_module_1.ReviewsModule,
            comments_module_1.CommentsModule,
            directors_module_1.DirectorsModule,
            ratings_module_1.RatingsModule,
            quotes_module_1.QuotesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map