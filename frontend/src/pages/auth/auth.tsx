import { useEffect, useState } from "react";
import { AuthService } from "../../../services/auth.service.ts";
import { Register } from "../../components/register/register.tsx";
import styles from "./auth.module.scss";
import { AuthType } from "../../common/type/auth.type.ts";

export const Auth = () => {
    const [data, setData] = useState<AuthType>({
        isUser: true,
        imageUrl: '',
        email: '',
        nickname: '',
        kakaoId: '',
        phoneNumber: ''
    });

    // useEffect : 컴포넌트가 렌더링 될 때 실행하는 Hook
    // /auth?code=access_token
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        code && AuthService.login(code).then(data => {
            if (data?.isUser) {
                window.location.href = "/";
            } else {
                window.history.pushState("", '' ,`register`)
            }
            setData(data);
        });
    }, []);

    return (
        !data?.isUser ?
        <div className={styles.authWrapper}>
            <Register data={data}
                      setData={setData} />
        </div> : <div></div>
    );
};