import React from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { sighnUp } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navgiation = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let mydata = await sighnUp(data);

    if (mydata) {
      reset();

      toast.success("Account has been created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navgiation("/signin");
    } else {
      return;
    }
  };

  return (
    <div
      className="signincover"
     
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <div className="userinfocont">
        <>
          <div className="containerr">
            <div className="login-container" id="login-container">
              <div className="login-form">
                <h2>Sign Up</h2>
                <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      })}
                    />
                  </div>
                  {errors.email?.type === "required" && (
                    <p
                      style={{
                        color: "red",
                        marginBottom: "9px",
                        marginTop: "0px",
                      }}
                    >
                      Email is required
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p
                      style={{
                        color: "red",
                        marginBottom: "9px",
                        marginTop: "0px",
                      }}
                    >
                      Please Enter your valid Email!
                    </p>
                  )}

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      })}
                    />
                  </div>
                  {errors.password?.type === "required" && (
                    <p
                      style={{
                        color: "red",
                        marginBottom: "9px",
                        marginTop: "0px",
                      }}
                    >
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p
                      style={{
                        color: "red",
                        marginBottom: "9px",
                        marginTop: "0px",
                      }}
                    >
                      At least 1 Uppercase, At least 1 Lowercase, At least 1
                      Number, At least 1 Symbol, symbol allowed !@#$%^&*_=+-,
                      Min 8 chars and Max 12 chars
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary btn-custom">
                    Create Account
                  </button>
                  <div className="mt-3 text-center">
                    <Link to={"/signin"}>Login Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Signup;
