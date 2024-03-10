import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class SignupDto {
    @IsNotEmpty()
    @IsEmail()
    kakaoEmail: string;
    
    @IsString()
    @IsNotEmpty()
    kakaoId: string;

    @IsString()
    @IsNotEmpty()
    kakaoName: string;

    @IsString()
    @IsNotEmpty()
    kakaoProfileImg: string;
    
    @IsNumber()
    @IsNotEmpty()
    phoneNumber: number;

    @IsBoolean()
    @IsNotEmpty()
    isAdmin: boolean;
}
