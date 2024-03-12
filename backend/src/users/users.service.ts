import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    async createUser({ email, imageUrl, kakaoId, nickname, phoneNumber }) {
        const user = {
            kakaoEmail: email,
            kakaoId: kakaoId,
            kakaoName: nickname,
            kakaoProfileImg: imageUrl,
            phoneNumber: phoneNumber,
            isAdmin: false,
        };

        await this.usersRepository.save(this.usersRepository.create(user));
    }

    createAdmin({ email, kakaoId, nickname, phone }) {
        const user = {
            kakaoEmail: email,
            kakaoId: kakaoId,
            kakaoName: nickname,
            kakaoProfileImg: "",
            phoneNumber: phone,
            isAdmin: true,
        };

        this.usersRepository.save(this.usersRepository.create(user));
    }
    updateUser(id: number) {}

    removeUser(id: number, email: string) {
        const user = this.findUserByEmail(email);
        if (!user) {
            throw new NotFoundException("존재하지 않는 사용자입니다.");
        }
        const result = this.usersRepository.delete({ id });
        return result;
    }

    findUserByEmail(email: string) {
        return this.usersRepository.findOne({ where: { kakaoEmail: email } });
    }
}
