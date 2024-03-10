import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SocialLoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    kakaoId: string;

    @IsString()
    @IsNotEmpty()
    nickname: string;
}

export class SocialRegistDto {
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
