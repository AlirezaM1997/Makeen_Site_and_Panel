import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { adminInfoAction } from "../slices/adminInfoSlice";
import { useState, useEffect } from "react";
export const Auth = (Component) => {
  const AuthenticatedComponent = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getUser = async () => {
        const response = await fetch("http://localhost:4000/user/me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            auth: `ut ${getCookie("token")}`,
          },
          body: JSON.stringify({}),
        });
        const userData = await response.json();
        setData(userData);
        dispatch(adminInfoAction(userData));
        setLoading(false)
      };
      getUser();
    }, []);
    if (loading) {
      return <Loading />;
    } else {
      if (data && data._id) {
        router.push("/user/dashboard");
      } else {
        return <Component />;
      }
    }
  };
  return AuthenticatedComponent;
};
