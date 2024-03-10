export declare const SocialUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export interface SocialUserAfterAuth {
    email: string;
    kakaoId: string;
    nickname: string;
}
