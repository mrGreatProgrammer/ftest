import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error__page flex flex-col items-center pt-24">
      <h1 className="text-5xl font-nfc ">404</h1>
      {/* <img className="py-5" width={'500px'} src={accident} alt="" /> */}
      <p className="error__text  text-center font-nfc text-2xl mb-5">Страница не найдена</p>
      <a href="/">
        <Link to={"/"} className="go_home-link">На главную</Link>
      </a>
    </div>
  );
};

export default NotFoundPage;