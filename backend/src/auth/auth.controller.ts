import { Controller, Get, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { AuthService } from "./auth.service";
import { KakaoAuthGuard } from "./guard/auth.guard";
import { SocialUser, SocialUserAfterAuth } from "../users/users.decorator";
import { Response } from "express";
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
    async register(@Body() socialRegistUser: SocialRegisterDto) {
        console.log("d", socialRegistUser);
        await this.authService.OAuthRegister({
            socialRegisterDto: socialRegistUser,
        });
    }

    @Post("login")
    signIn(@Body() loginDto: SocialLoginDto) {
        // loginDto = { token: access_token }
        const data = this.authService.OAuthLogin({
            socialLoginDto: loginDto,
        });

        return data;
    }
}
