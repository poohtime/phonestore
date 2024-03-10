import { SocialLoginDto } from "../dtos/auth.dto";

export interface IAuthServiceSocialLogin {
    socialLoginDto: SocialLoginDto;
}

export interface IAuthServiceRefresh {
    userId: string;
}

export interface IAuthServiceGetAccessToken {
    userId: string;
}

export interface IAuthServiceGetRefreshToken {
    userId: string;
}

export interface IAuthServiceLoginReturn {
    accessToken: string;
    refreshToken: string;
}
