import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users', // 데이터베이스 테이블의 이름
})
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'kakao_id' })
  kakaoId: string;

  @Column({name: 'kakao_profile_img'})
  kakaoProfileImg: string;

  @Column({name: 'kakao_name'})
  kakaoName: string;

  @Column({ unique: true, name: 'kakao_email' })
  kakaoEmail: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
