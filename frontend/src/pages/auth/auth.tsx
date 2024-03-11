import { useEffect, useState } from "react";
import { AuthService } from "../../../services/auth.service.ts";
import { useNavigate } from "react-router-dom";
import { Register } from "../../components/register/register.tsx";
import styles from "./auth.module.scss";

export const Auth = () => {
    const [data, setData] = useState({
        isUser: false,
        email: "",
        nickname: "",
        kakaoId: "",
        phoneNumber: "010-1234-5678"
    });
    const navigate = useNavigate();

    // useEffect : 컴포넌트가 렌더링 될 때 실행하는 Hook
    // /auth?code=access_token
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        code && AuthService.login(code).then(data => setData(data));
    }, []);

    useEffect(() => {
        if (data?.isUser) {
            console.log("oh yeah??");
            navigate("../");
        } else {
            console.log("oh yeah", data?.isUser);
        }
    }, [data]);

    console.log(data);
    return (
        <div className={styles.authWrapper}>
            <Register data={data}
                      setData={setData} />
        </div>
    );
};