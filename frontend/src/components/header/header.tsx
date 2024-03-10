import "./header.css";

export const Header = () => {
  return (
    <div className={"header_wrapper"}>
      <div>
        <img src={"/images/tworld.png"} alt={"T-World"} />
        <span>Store</span>
      </div>
      <div>상품서비스</div>
      <div>문의하기</div>
      <div>로그인</div>
      <div>회원가입</div>
    </div>
  );
};
