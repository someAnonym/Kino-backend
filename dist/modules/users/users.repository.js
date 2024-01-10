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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const user_mapper_1 = require("./user.mapper");
const user_orm_entity_1 = require("./entities/user-orm.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
let UsersRepository = exports.UsersRepository = class UsersRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async loadUser(userId) {
        const user = await this.repository.findById(userId);
        return user_mapper_1.UserMapper.mapToDomain(user);
    }
    async updateUser(user) {
        try {
            const updatedUser = user.getUserData();
            const currentUser = await this.repository.findById(user.id);
            currentUser.vk = updatedUser.vk;
            currentUser.instagram = updatedUser.instagram;
            currentUser.youtube = updatedUser.youtube;
            currentUser.twitter = updatedUser.twitter;
            currentUser.facebook = updatedUser.facebook;
            currentUser.aboutMe = updatedUser.aboutMe;
            currentUser.name = updatedUser.name;
            currentUser.secondName = updatedUser.secondName;
            currentUser.avatarImage = updatedUser.avatarImage;
            currentUser.password = updatedUser.password;
            currentUser.gender = updatedUser.gender;
            currentUser.birthday = updatedUser.birthday;
            currentUser.city = updatedUser.city;
            currentUser.country = updatedUser.country;
            currentUser.favoriteGenres = updatedUser.favoriteGenres;
            currentUser.persons = updatedUser.persons.map((i) => new mongodb_1.ObjectId(i));
            return this.repository.findOneAndUpdate(currentUser._id, currentUser);
        }
        catch (error) {
            throw new common_1.ForbiddenException('Ошибка при обновлении пользователя', error);
        }
    }
    create(dto) {
        return this.repository.create(dto);
    }
    findByEmail(email) {
        return this.repository.findOne({ email });
    }
    findById(id) {
        const user = this.repository.findById(id);
        return user.populate('reviews').populate('comments');
    }
    async search(query) {
        const users = await this.repository.find();
        return users.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
    }
};
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_orm_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map