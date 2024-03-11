import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SocialLoginDto {
    @IsNotEmpty()
    @IsString()
    token: string;
}

export class SocialRegisterDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    kakaoId: string;

    @IsString()
    @IsNotEmpty()
    nickname: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}
