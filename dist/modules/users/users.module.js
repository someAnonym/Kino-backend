"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const mongoose_1 = require("@nestjs/mongoose");
const user_orm_entity_1 = require("./entities/user-orm.entity");
const update_user_use_case_1 = require("../../domains/ports/in/update-user.use-case");
const update_user_service_1 = require("../../domains/services/update-user.service");
const update_user_password_use_case_1 = require("../../domains/ports/in/update-user-password.use-case");
const update_user_password_service_1 = require("../../domains/services/update-user-password.service");
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_orm_entity_1.User.name, schema: user_orm_entity_1.UserSchema }]),
        ],
        controllers: [users_controller_1.UsersController],
        exports: [users_repository_1.UsersRepository],
        providers: [
            users_repository_1.UsersRepository,
            {
                provide: update_user_use_case_1.UpdateUserUseCaseSymbol,
                useClass: update_user_service_1.UpdateUserService,
            },
            {
                provide: update_user_password_use_case_1.UpdateUserPasswordUseCaseSymbol,
                useClass: update_user_password_service_1.UpdateUserPasswordService,
            },
            {
                provide: update_user_use_case_1.UpdateUserUseCaseSymbol,
                useFactory: (_userRepository) => {
                    return new update_user_service_1.UpdateUserService(_userRepository);
                },
                inject: [users_repository_1.UsersRepository],
            },
            {
                provide: update_user_password_use_case_1.UpdateUserPasswordUseCaseSymbol,
                useFactory: (_userRepository) => {
                    return new update_user_password_service_1.UpdateUserPasswordService(_userRepository);
                },
                inject: [users_repository_1.UsersRepository],
            },
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map