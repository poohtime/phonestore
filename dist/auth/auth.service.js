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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const failType_enum_1 = require("../enum/failType.enum");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async OAuthRegister({ socialRegisterDto }) {
        const { email } = socialRegisterDto;
        const user = await this.usersService.findUserByEmail(email);
        if (!user) {
            await this.usersService.createUser(socialRegisterDto);
        }
        else {
            throw new common_1.UnauthorizedException(failType_enum_1.FailType.USERNAME_EXIST);
        }
    }
    async OAuthLogin({ socialLoginDto }) {
        console.log(socialLoginDto);
        const { kakaoId } = socialLoginDto;
        const user = await this.usersService.findUserByEmail(kakaoId);
        if (!user) {
            throw new common_1.UnauthorizedException(failType_enum_1.FailType.USERNAME_NOT_EXIST);
        }
        const accessToken = 'this.getAccessToken({ userId: user.id })';
        const refreshToken = 'this.getRefreshToken({ userId: user.id })';
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map