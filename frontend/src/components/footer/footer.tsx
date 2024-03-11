import styles from "./footer.module.scss";

export const Footer = () => {

    return (
        <footer className={styles.headerWrapper}>
            <div className={styles.logo}>
                <img src={"/images/logo_tworld.png"} alt={"T-World"} />
                <span>Store</span>
            </div>
            <div className={styles.menuList}>
                <div>고객센터</div>
                <div>대표: 휴대폰 국번 없이 114(무료) 또는 080-011-6000(무료), 국번 없이 1599-0011(유료)</div>
                <a className={styles.kakaoLogin}
                   href={"https://kauth.kakao.com/oauth/authorize?client_id=f4ced7c8d7fa80747d0e59e60e33ed67&redirect_uri=http://localhost:5173/auth&response_type=code"}>
                    <img src={"/images/kakao_login_medium_narrow.png"} alt={"Kakao"} />
                </a>
            </div>
        </footer>
    );
};
