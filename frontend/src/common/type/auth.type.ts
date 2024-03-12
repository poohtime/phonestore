export type AuthType = {
    isUser: boolean,
    imageUrl: string,
    email: string,
    nickname: string,
    kakaoId: string,
    phoneNumber: string
}

export type RegisterType = {
    data: AuthType,
    setData: (data: AuthType) => void
}