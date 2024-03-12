import axios from "axios";
import config from "../config/config";

export class AuthService {
    static login = (code: string) => {
        // code = access_token
        console.log(`${config.url}/auth/login`);
        return axios.post(`${config.url}/auth/login`, { token: code })
            .then((res) => {
                console.log(res.data);
                return res.data;
            });
    };

    static register = (data: any) => {
        console.log(`${config.url}/auth/register`, data);
        return axios.post(`${config.url}/auth/register`, data)
            .then((res) => {
                return res.data;
            });
    };
}