import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { KakaoStrategy } from "./strategies/social-kakao-strategy";
import { UsersModule } from "../users/users.module";

@Module({
    imports: [ConfigModule, JwtModule.register({}), UsersModule],
    providers: [AuthService, KakaoStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
