import { Controller } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "./auth.service";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { SocialLoginDto, SocialRegisterDto } from "./dtos/auth.dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private configService: ConfigService,
    ) {}

    @Post("register")
    async register(@Body() socialRegisterUser: SocialRegisterDto) {
        return await this.authService.OAuthRegister({
            socialRegisterDto: socialRegisterUser,
        });
    }

    @Post("login")
    async login(@Body() loginDto: SocialLoginDto) {
        // loginDto = { token: access_token }
        const data = await this.authService.OAuthLogin({
            socialLoginDto: loginDto,
        });

        return data;
    }
}
