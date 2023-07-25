"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardMapper = void 0;
const award_entity_1 = require("../../domains/entities/award.entity");
class AwardMapper {
    static mapToDomain(award) {
        const id = award._id.valueOf();
        return new award_entity_1.AwardEntity(id, award.picture, award.name, award.description, award.year);
    }
}
exports.AwardMapper = AwardMapper;
//# sourceMappingURL=award.mapper.js.map