import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { IAuthServiceSocialLogin } from "./interfaces/auth.interface";
import { FailType } from "../enum/failType.enum";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    async OAuthRegister({ socialRegisterDto }) {
        // User 존재 여부 확인
        const { email } = socialRegisterDto;
        const user = await this.usersService.findUserByEmail(email);

        // User 없을 시, 회원 생성
        if (!user) {
            await this.usersService.createUser(socialRegisterDto);
        } 
        // User 존재할 시, 예외 처리
        else {
            throw new UnauthorizedException(FailType.USERNAME_EXIST);
        }
    }
 
    async OAuthLogin({ socialLoginDto }: IAuthServiceSocialLogin) {
        // User 존재 여부 확인
        console.log(socialLoginDto);
        const { kakaoId } = socialLoginDto;
        const user = await this.usersService.findUserByEmail(kakaoId);

        if (!user) {
            throw new UnauthorizedException(FailType.USERNAME_NOT_EXIST);
        }

        const accessToken = 'this.getAccessToken({ userId: user.id })';
        const refreshToken = 'this.getRefreshToken({ userId: user.id })';

        return { accessToken, refreshToken };
    }
}
