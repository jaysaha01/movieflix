import React, { useEffect } from 'react'
import Header from './Header'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { sighnIn } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'sahajay426@gmail.com',
      password:'GeekforGeek@123'
    }
  });

  let navgiation= useNavigate();

  const onSubmit = async(data) => {
    let mydata= await sighnIn(data);

    if(mydata?.session?.access_token){
  
      navgiation("/browse")
    }
  }

  return (
    <div className='signincover'>
      <Header />
      <div className="userinfocont">
        <>
          <div className="containerr">
            <div className="login-container" id="login-container">

              <div className="login-form">
                <h2>Login</h2>
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
                  {errors.email?.type === 'required' && <p style={{color:"red", marginBottom:"9px", marginTop:'0px'}}>Email is required</p>}
                  {errors.email?.type === 'pattern' && <p style={{color:"red", marginBottom:"9px", marginTop:'0px'}}>Please Enter your valid Email!</p>}

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
                  {errors.password?.type === 'required' && <p style={{color:"red", marginBottom:"9px", marginTop:'0px'}}>Password is required</p>}
                  {errors.password?.type === 'pattern' && <p style={{color:"red", marginBottom:"9px", marginTop:'0px'}}>At least 1 Uppercase, At least 1 Lowercase, At least 1 Number, At least 1 Symbol, symbol allowed !@#$%^&*_=+-, Min 8 chars and Max 12 chars</p>}

                  <button type="submit" className="btn btn-primary btn-custom">
                    Login
                  </button>
                  <div className="mt-3 text-center">
                    <Link to={'/signup'}>
                      Create Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          
          </div>
        </>
      </div>
    </div>
  )
}

export default Signin
