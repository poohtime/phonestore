import { Controller, Get, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { AuthService } from "./auth.service";
import { KakaoAuthGuard } from "./guard/auth.guard";
import { SocialUser, SocialUserAfterAuth } from "../users/users.decorator";
import { Response } from "express";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { SocialRegistDto } from "./dtos/auth.dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private configService: ConfigService,
    ) {}

    @Post("register")
    async register(@Body() socialRegistUser: SocialRegistDto) {
        await this.authService.OAuthRegister({
            socialRegisterDto: socialRegistUser,
        });
    }

    @UseGuards(KakaoAuthGuard)
    @Get("login")
    async signIn(
        @SocialUser() socialUser: SocialUserAfterAuth,
        @Res({ passthrough: true }) res: Response,
    ): Promise<void> {
        const { accessToken, refreshToken } = await this.authService.OAuthLogin({
                socialLoginDto: socialUser,
            });

        // res.cookie('refreshToken', refreshToken);
        // res.cookie('accessToken', accessToken);
        //
        // res.redirect('/');
    }
}