
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthuser } = useAuthContext();
  const signup = async ({
    fullName,
    password,
    userName,
    confirmPassword,
    Gender,
  }) => {
    const success = handleerror({
      fullName,
      password,
      userName,
      confirmPassword,
      Gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
          fullName,
          password,
          userName,
          confirmPassword,
          Gender
        }),
      });
      const data = await res.json();

      if(data.error){
        throw new Error(data.error);
      }
      

      // localstorage
      localStorage.setItem("nexus-user", JSON.stringify(data));
      // context
      setAuthuser(data);


      if(data){
        console.log(data);
        toast.success("Signed up successfully");
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setAuthuser(null);  
    } finally {
      setLoading(false);
    }

  };
  return {loading, signup};
};

export default useSignup;

const handleerror = ({
  fullName,
  password,
  userName,
  confirmPassword,
  Gender,
}) => {
  if (!password || !userName || !confirmPassword || !Gender || !fullName) {
    toast.error("please fill out all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password don't match");
    return false;
  }

  if (password.length < 8) {
    toast.error("password must be of 8 characters");
    return false;
  }
  return true;
};
