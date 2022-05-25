import React from "react";
import "./_contact.scss";
import "../main.scss";
import signUp from "../../Assets/images/signUp.png";
function Subscribe() {
  return (
    <div className="section-sub">
      <div className="container">
        <div className="section-sub-content">
          <h2 className="section-sub-content__text">
            Subscribe to our newsletter
          </h2>
          <form className="section-sub-content-form">
            <input type="email" className="section-sub-content-form__input" />
            <button
              type="submit"
              className="section-sub-content-form__btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Subscribe />
    </div>
  );
}

export default Contact;
