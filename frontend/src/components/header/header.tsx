import styles from "./header.module.scss";

export const Header = () => {

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.logo}>
                <img src={"/images/logo_tworld.png"} alt={"T-World"} />
                <span>Store</span>
            </div>
            <div className={styles.menuList}>
                <div>상품서비스</div>
                <div>문의하기</div>
                <a className={styles.kakaoLogin}
                   href={"https://kauth.kakao.com/oauth/authorize?client_id=f4ced7c8d7fa80747d0e59e60e33ed67&redirect_uri=http://localhost:5173/auth&response_type=code"}>
                    <img src={"/images/kakao_login_medium_narrow.png"} alt={"Kakao"} />
                </a>
            </div>
        </header>
    );
};
