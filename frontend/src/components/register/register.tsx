import React, { useState } from "react";
import { AuthService } from "../../../services/auth.service.ts";
import styles from "./register.module.scss";
import { ECommerce } from "./regulations/e_commerce/e_commerce.tsx";
import { RegisterType } from "../../common/type/auth.type.ts";

export const Register = ({ data, setData }: RegisterType) => {
    const [inputValue, setInputValue] = useState("");
    const [eCommerceChecked, setECommerceChecked] = useState(false);
    const [personalInformationChecked, setPersonalInformationChecked] = useState(false);

    console.log(data);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b -]{0,11}$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
        }
    };

    const signUp = () => {
        if (inputValue === "") {
            alert("휴대폰 번호를 입력해주세요");
            return;
        }

        if (!eCommerceChecked) {
            alert("이용약관에 동의해주세요");
            return;
        }
        if (!personalInformationChecked) {
            alert("개인정보 처리방침에 동의해주세요");
            return;
        }

        if (data.kakaoId !== "") {
            AuthService.register({ ...data, phoneNumber: inputValue }).then(data => setData(data));
        } else {
            alert("카카오 로그인을 먼저 해주세요");
        }
    };

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.menuTitle}>회원 가입</div>
            <div>
                <div>이메일</div>
                <input type={"text"} value={data.email} readOnly={true} />
            </div>
            <div>
                <div>닉네임</div>
                <input type={"text"} value={data.nickname} readOnly={true} />
            </div>
            <div>
                <div>휴대폰</div>
                <input type={"tel"} onChange={handleChange} value={inputValue} placeholder={"휴대폰 번호(-을 제외하고 작성해주세요)"} />
            </div>
            <div className={styles.groupForm}>
                <ECommerce />
                <div>
                    <input type={"checkbox"} onChange={() => setECommerceChecked(!eCommerceChecked)} />
                    <span>이용약관 동의</span>
                    <span style={{ color: "red" }}>(필수)</span>
                </div>
                <div>
                    <input type={"checkbox"}
                           onChange={() => setPersonalInformationChecked(!personalInformationChecked)} />
                    <span>개인정보 처리방침 동의</span>
                    <span style={{ color: "red" }}>(필수)</span>
                </div>
            </div>
            <div className={styles.registerButton}>
                <button onClick={signUp}>회원가입</button>
            </div>
        </div>
    );
};