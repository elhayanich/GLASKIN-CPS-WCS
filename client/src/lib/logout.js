import axios from "axios";

const fetchlogout = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/logout`,
      {
        withCredentials: true,
      }
    );

    return response.data.user;
  } catch (e) {
    return null;
  }
};
export default fetchlogout;