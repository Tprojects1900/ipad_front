import React,{ useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory  } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "../components/Loader";

const GuardMiddleware = ({ children, requireAuth = true, reverse = false }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useHistory ();
    const token = Cookies.get("token");


    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!loading) {
            if (requireAuth && !user?.user && !token) {
                navigate.push("/login",{replace:true}); 
            } else if (reverse && user?.user) {
                navigate.push("/dashboard",{replace:true});
            }
            setIsChecking(false); 
        }
    }, [user, loading, navigate, requireAuth, reverse, token]);

   
    if (loading || isChecking) return <Loader />;

    return children;
};

export default GuardMiddleware;