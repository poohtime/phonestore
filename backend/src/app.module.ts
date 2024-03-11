import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entity/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import https from "https";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),
        TypeOrmModule.forRoot({
            // DB 설정 관련 내용 기입
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "ehdgns1234",
            database: "phonestore",
            entities: [Users],
            synchronize: true,
        }),
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
