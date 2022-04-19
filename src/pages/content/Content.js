import React from "react";
import "./style.css";

const Content = () => {
  return (
    <div className="content">
      <h5>
        Hesabınızda oturum açın! <hr></hr>
      </h5>
      <div className="sosyal">
        <div className="sosyallink">
          <i id="facebook" className="fa-brands fa-facebook"></i>
          <a href="https://www.facebook.com/"> Facebook ile devam et</a>
        </div>
        <div className="sosyallink">
          <i className="fa-brands fa-google"></i>
          <a href="https://www.google.com.tr/?hl=tr"> Google ile devam et</a>
        </div>
        <div className="sosyallink">
          <i  id="apple" className="fa-brands fa-apple"></i>
          <a id="apple" href="https://appleid.apple.com/">Apple ile devam et</a>
        </div>
      </div>

      <div className="form-action">
        <div className="formflex">
          <i className="fa-solid fa-envelope"></i>
          <input typeof="email" placeholder="E-Posta"></input>
        </div>
        <div className="formflex">
          <i className="fa-solid fa-lock"></i>
          <input typeof="password" placeholder="Şifre"></input>
        </div>
      </div>

      <div className="oturum">
        <input
          id="btnoturum"
          typeof="submit"
          defaultValue={"Oturum Aç"}
        ></input>
        <br></br>
        <div className="sifre">
        <span> veya </span>
        <a href="#">Şifremi unuttum</a>

        </div>
       
      </div>
      <div>
        Hesabınız yok mu?
        <a id="kaydol" href="#"> Kaydol</a>
      </div>
    </div>
  );
};
export default Content;
