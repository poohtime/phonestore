import { AuthService } from "../../../services/auth.service.ts";

export const Register = ({ data, setData }: any) => {

    const signUp = () => {
        AuthService.register({ ...data, phoneNumber: "01012345678" }).then(data => setData(data));
    };

    return (
        <div>
            <div>
                회원가입 하시겠습니까?
            </div>
            <button onClick={signUp}>회원가입</button>
        </div>
    );
};