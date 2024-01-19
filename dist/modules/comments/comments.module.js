"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comments_controller_1 = require("./comments.controller");
const comments_repository_1 = require("./comments.repository");
const comment_orm_entity_1 = require("./entities/comment-orm.entity");
const update_comment_service_1 = require("../../domains/services/update-comment.service");
const update_comment_use_case_1 = require("../../domains/ports/in/update-comment.use-case");
let CommentsModule = exports.CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: comment_orm_entity_1.Comment.name, schema: comment_orm_entity_1.CommentSchema }])],
        controllers: [comments_controller_1.CommentsController],
        exports: [comments_repository_1.CommentsRepository],
        providers: [
            comments_repository_1.CommentsRepository,
            {
                provide: update_comment_use_case_1.UpdateCommentUseCaseSymbol,
                useClass: update_comment_service_1.UpdateCommentService,
            },
            {
                provide: update_comment_use_case_1.UpdateCommentUseCaseSymbol,
                useFactory: (_updateRepository) => {
                    return new update_comment_service_1.UpdateCommentService(_updateRepository);
                },
                inject: [comments_repository_1.CommentsRepository],
            },
        ],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map