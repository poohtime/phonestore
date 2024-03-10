import { UsersService } from "../users/users.service";
import { IAuthServiceSocialLogin } from "./interfaces/auth.interface";
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    OAuthRegister({ socialRegisterDto }: {
        socialRegisterDto: any;
    }): Promise<void>;
    OAuthLogin({ socialLoginDto }: IAuthServiceSocialLogin): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
