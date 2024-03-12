import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import * as qs from "qs";
import {
    IAuthServiceGetAccessToken,
    IAuthServiceGetRefreshToken,
    IAuthServiceSocialLogin,
} from "./interfaces/auth.interface";
import { FailType } from "../enum/failType.enum";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, map } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {}

    async OAuthRegister({ socialRegisterDto }) {
        console.log(socialRegisterDto);
        // User 존재 여부 확인
        const { email } = socialRegisterDto;
        const user = await this.usersService.findUserByEmail(email);
        socialRegisterDto.isUser = true;

        // User 없을 시, 회원 생성
        if (!user) {
            await this.usersService.createUser(socialRegisterDto);
            return socialRegisterDto;
        }

        // User 존재할 시, 예외 처리
        else {
            throw new UnauthorizedException(FailType.USERNAME_EXIST);
        }
    }

    async OAuthLogin({ socialLoginDto }: IAuthServiceSocialLogin) {
        // User 존재 여부 확인
        const kakaoTokenUrl = "https://kauth.kakao.com/oauth/token";
        const body = {
            grant_type: "authorization_code",
            client_id: this.configService.get("KAKAO_CLIENT_ID"),
            redirect_uri: this.configService.get("KAKAO_REDIRECT_URI"),
            code: socialLoginDto.token,
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        };
        console.log(socialLoginDto.token, body);

        // fetch(kakaoTokenUrl, {
        //    method: "POST",
        //    body: qs.stringify(body),
        //    headers
        // });

        // axios.post(kakaoTokenUrl, qs.stringify(body), {
        //                 timeout: 30000,
        //                 headers,
        //            }).then((res) => res.data);
        const response = await firstValueFrom(
            this.httpService.post(kakaoTokenUrl, qs.stringify(body), {
                timeout: 30000,
                headers,
            }),
        );

        console.log(response.data.access_token);

        const kakaoUserInfoUrl = "https://kapi.kakao.com/v2/user/me";
        const headerUserInfo = {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: "Bearer " + response.data.access_token,
        };

        // fetch(kakaoUserInfoUrl, {
        //    method: "GET",
        //    body: qs.stringify(body),
        //    headers: headerUserInfo
        // });

        const responseUser = await firstValueFrom(
            this.httpService
                .get(`${kakaoUserInfoUrl}`, {
                    headers: headerUserInfo,
                })
                .pipe(
                    map((res) => {
                        return res.data;
                    }),
                ),
        );
        console.log(responseUser);
        const kakaoId = responseUser.id;
        const email = responseUser.kakao_account.email;
        const nickname = responseUser.properties.nickname;
        const imageUrl = responseUser.properties.profile_image;

        // 존재하는 유저인지 확인
        const user = await this.usersService.findUserByEmail(email);

        // 아니라면 회원가입으로 넘어가도록 값을 반환
        if (!user) {
            console.log("hello", { isUser: false, kakaoId, email, nickname });
            return { isUser: false, kakaoId, imageUrl, email, nickname };
        }
        const accessToken = this.getAccessToken({ userId: user.kakaoId });
        const refreshToken = this.getRefreshToken({ userId: user.kakaoId });

        return { isUser: true, accessToken, refreshToken, user };
    }

    private getAccessToken({ userId }: IAuthServiceGetAccessToken): string {
        const payload = { sub: userId };
        return this.jwtService.sign(payload, {
            secret: process.env.ACCESS_SECRET_KEY,
            expiresIn: "1d",
        });
    }

    private getRefreshToken({ userId }: IAuthServiceGetRefreshToken): string {
        const payload = { sub: userId, tokenType: "refresh" };
        return this.jwtService.sign(payload, {
            secret: process.env.REFRESH_SECRET_KEY,
            expiresIn: "14d",
        });
    }
}
