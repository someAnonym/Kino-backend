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
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.FileType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../../../domains/entities/user.entity");
var FileType;
(function (FileType) {
    FileType["PHOTOS"] = "photos";
    FileType["TRASH"] = "trash";
})(FileType || (exports.FileType = FileType = {}));
let File = exports.File = class File {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], File.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "filename", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "originalName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], File.prototype, "size", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], File.prototype, "mimetype", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", user_entity_1.UserEntity)
], File.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], File.prototype, "deletedAt", void 0);
exports.File = File = __decorate([
    (0, mongoose_1.Schema)()
], File);
//# sourceMappingURL=file.entity.js.map