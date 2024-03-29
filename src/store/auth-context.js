import React, {useState,useContext} from "react"
import CartContext from "./cart-context";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token,email) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    let initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const cartcntx = useContext(CartContext);

    console.log('hello');

    const userLoggedIn = !!token;
   
    const loginHandler = (token,email) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        console.log(token);
        console.log(email);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        cartcntx.items=[];
       // console.log(token);
       // console.log(email);
    }

    const contextValue = ({
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    })

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
}
export default AuthContext;