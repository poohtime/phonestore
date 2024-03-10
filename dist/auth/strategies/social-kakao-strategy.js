"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
class KakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, "kakao") {
    constructor() {
        super({
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: process.env.KAKAO_REDIRECT_URI,
            scope: ["account_email", "profile_nickname"],
        });
    }
    async validate(accessToken, refreshToken, profile) {
        console.log("accessToken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        console.log(profile);
        return {
            email: profile._json.kakao_account.email,
            kakaoId: String(profile.id),
            nickname: profile.displayName,
        };
    }
}
exports.KakaoStrategy = KakaoStrategy;
//# sourceMappingURL=social-kakao-strategy.js.map