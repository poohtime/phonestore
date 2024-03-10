import { ConfigService } from "@nestjs/config";
import { AuthService } from "./auth.service";
import { SocialUserAfterAuth } from "../users/users.decorator";
import { Response } from "express";
import { SocialRegistDto } from "./dtos/auth.dto";
export declare class AuthController {
    private readonly authService;
    private configService;
    constructor(authService: AuthService, configService: ConfigService);
    register(socialRegistUser: SocialRegistDto): Promise<void>;
    signIn(socialUser: SocialUserAfterAuth, res: Response): Promise<void>;
}
