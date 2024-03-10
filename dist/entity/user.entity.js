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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'kakao_id' }),
    __metadata("design:type", String)
], Users.prototype, "kakaoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kakao_profile_img' }),
    __metadata("design:type", String)
], Users.prototype, "kakaoProfileImg", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kakao_name' }),
    __metadata("design:type", String)
], Users.prototype, "kakaoName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'kakao_email' }),
    __metadata("design:type", String)
], Users.prototype, "kakaoEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number' }),
    __metadata("design:type", String)
], Users.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_admin' }),
    __metadata("design:type", Boolean)
], Users.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)({
        name: 'users',
    })
], Users);
//# sourceMappingURL=user.entity.js.map