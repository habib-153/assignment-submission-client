/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()
    const { createUser, handleUpdateProfile } = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name, email, photoUrl, password)

    if(password.length < 6){
      toast.error('Password should be at 6 characters or longer');
      return
  }
  else if(!/[A-Z]/.test(password)){
    toast.error('Your password should have at least one Uppercase Character and a Special Character');
      return;
  }
    createUser(email, password)
    .then(res =>{
      console.log(res.user)
      handleUpdateProfile(name, photoUrl)
      .then(()=>{
        toast.success("Registration successful")
        navigate('/')
      })
    })
    .catch(err =>{
      console.error(err)
      toast.error(err.message)
    })
  }

  return (
      <div className=" mx-auto min-h-screen ">
        <div className="hero-content mx-auto max-w-xl">
          <form onSubmit={handleRegister}
            className="card card-body rounded w-full shadow-2xl bg-base-100 md:mt-12"
          >
            <h2 className="text-center text-2xl font-bold">Please Register</h2>
              <div className="">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    placeholder="Enter the url of your photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                
              </div>
            
            <div className="mt-4">
              <p className="mb-3 font-semibold">Already registered? <Link to='/login' className="text-[#339844] ">Login</Link></p>
              
              <button className="btn text-white w-full bg-[#37c44e] hover:bg-[#269136]">
               Register
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default Register;