import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URL_API;
    console.log("api from env file", API); 

    const storeTokenInLs = (servertoken) => {
        return localStorage.setItem("token", servertoken);
    };

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    let isLoggedIn = !!token;

    const userAuthentication = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            if (response.ok) {
                const userinfo = await response.json();
                setUser(userinfo.userdata);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const userServices = async () => {
        try {
            const response = await fetch(`${API}/api/data/services`, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                setServices(data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userAuthentication();
        userServices();
    }, []);

    return (
        <AuthContext.Provider value={{ storeTokenInLs, logoutUser, isLoggedIn, user, services, authorizationToken, isLoading, API }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    return authContextValue;
};
