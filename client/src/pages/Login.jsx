/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../components/Navbar";
import logo from "../assets/images/logo.png";


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
    <div className="min-h-screen bg-Creamy">
      <NavBar />
      <div className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
        <div className="rounded-xl w-full max-w-md p-6">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 rounded-full border-solid border-white"
              />
            </div>
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
                  Mot de passe :
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
                  Connexion
                </button>
              </div>
            </form>
            <p className="text-sm mt-2">
              Pas encore inscrit ?
              <Link to="/register" className="text-blue-400 underline hover:text-blue-300">
                Inscription
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
