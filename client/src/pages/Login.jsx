/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../components/Navbar";
import bgImage from "../assets/bg2.jpg";

export default function Login() {
  const { currentUser, setCurrentUser } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/quiz");
    }
  }, [currentUser, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(response.data.user);
      toast.success("You are now logged in!");
      navigate("/quiz");
    } catch (e) {
      console.error(e.response.data);
      toast.error("Login failed, please try again.");
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
                <label htmlFor="email" className="text-sm font-bold">
                  E-mail :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  {...register("email", {
                    required: "Votre email est obligatoire!",
                    pattern: {
                      value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                      message: "Le format de votre email est incorrect !",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-center">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-bold">
                  Password :
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your password"
                  className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                  {...register("password", {
                    required: "le mot de passe est requis!",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                      message: "Le format de votre mot de passe est incorrect !",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-center">{errors.password.message}</span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="btn bg-Dark text-Softy w-full p-2 mt-3 hover:bg-gray-600"
                >
                  Log in
                </button>
              </div>
            </form>
            <p className="text-sm mt-2">
              You don't have an account yet ?
              <Link to="/register" className="text-blue-400 underline hover:text-blue-300">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
