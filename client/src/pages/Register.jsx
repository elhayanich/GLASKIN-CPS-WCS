/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import NavBar from "../components/Navbar";
import bgImage from "../assets/bg2.jpg"; // Import your background image

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = { ...data };
    delete formData.confirmpassword;
    toast.success("You are now a registered user.. WELCOME!");
    reset();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user`, formData);
    } catch (e) {
      console.error(e.response.data);
    }
  };

  return (
    <div className="relative min-h-screen bg-Creamy">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.5, 
        }}
      >.</div>
      <NavBar />
      <div className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center relative z-10">
        <div className="rounded-xl w-full max-w-md p-6 bg-Softy bg-opacity-80 shadow-lg">
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="username" className="text-sm font-bold">
                  Username :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Type your chosen username"
                  {...register("username", {
                    required: "Ce champ est requis !",
                    minLength: {
                      value: 2,
                      message: "Votre nom d'utilisateur doit contenir au minimum 2 caractères",
                    },
                  })}
                />
                {errors?.username && (
                  <span className="text-red-500 text-center">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-bold">
                  Email address :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email address"
                  {...register("email", {
                    required: "Votre email est obligatoire!",
                    pattern: {
                      value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                      message: "Le format de votre email est incorrect !",
                    },
                  })}
                />
                {errors?.email && (
                  <span className="text-red-500 text-center">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="password" className="text-sm font-bold">
                  Password :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your chosen password"
                  {...register("password", {
                    required: "Le mot de passe est requis!",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                      message: "Le format de votre mot de passe est incorrect !",
                    },
                  })}
                />
                {errors?.password && (
                  <span className="text-red-500 text-center">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="confirmpassword" className="text-sm font-bold">
                  Confirm your password :
                </label>
                <input
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Type your password again to verify"
                  {...register("confirmpassword", {
                    required: "La confirmation du mot de passe est requise!",
                    validate: (value) =>
                      value === watch("password") || "Les mots de passe ne sont pas identiques !",
                  })}
                />
                {errors?.confirmpassword && (
                  <span className="text-red-500 text-center">
                    {errors.confirmpassword.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="btn bg-Dark text-Softy w-full p-2 mt-3 hover:bg-gray-600"
              >
                Register
              </button>
            </form>
            <p className="text-sm mt-2">
              You already have an account ?
              <Link
                to="/login"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Log in 
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

