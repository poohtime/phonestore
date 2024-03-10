import { Users } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    createUser({ email, kakaoId, nickname, phone }: {
        email: any;
        kakaoId: any;
        nickname: any;
        phone: any;
    }): void;
    findUserByEmail(email: string): Promise<Users>;
}
