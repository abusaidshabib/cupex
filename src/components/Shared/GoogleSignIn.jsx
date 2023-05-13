import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { googlePopUp } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/menu";

  const handleGPopUp = () => {
    googlePopUp(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  return (
    <button
      onClick={handleGPopUp}
      className="border border-white-800 py-5 text-black-900 flex items-center justify-center hover:text-white-500 hover:bg-black-900"
    >
      <FcGoogle className="text-3xl pr-2" />
      <span className="pl-2">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignIn;
