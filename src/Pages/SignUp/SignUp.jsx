import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center ">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {" "}
                {errors.email?.message}
              </p>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {" "}
                {errors.password?.message}
              </p>
            )}
            <div className="label">
              <span className="label-text"></span>
            </div>
          </label>

          <input
            className="btn btn-accent w-full "
            value="Loign"
            type="submit"
          />
        </form>
        <p>
          ALready Have an Account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Contunue With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
