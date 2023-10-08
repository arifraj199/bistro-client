import loginImg from "../../../assets/others/authentication2.png";
import loginBg from "../../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "70vh",
      }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:mr-20 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2 max-w-sm  bg-transparent">
          <form onSubmit={handleForm} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div onClick={handleCaptcha} className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="type above captcha"
                className="input input-bordered"
                required
              />
              <button
                type="submit"
                className="btn btn-outline btn-sm mt-2 btn-success"
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
