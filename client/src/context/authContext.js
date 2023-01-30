import { useEffect, createContext, useState } from "react";

//declare the context
const AuthContext = createContext({});

//Provider
function AuthProvider({ children }) {
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    email: "",
    firstName: "",
    lastName: "",
    loggedIn: false,
  };

  //two states : isAuthenticated and username
  const [email, setEmail] = useState(loginSession["email"]);
  const [firstName, setFirstName] = useState(loginSession["firstName"]);
  const [lastName, setLastName] = useState(loginSession["lastName"]);
  const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

  useEffect(() => {
    localStorage.setItem(
      "login",
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        loggedIn: loggedIn,
      })
    );
  }, [email, lastName, firstName, loggedIn]);

  //if the user is logging in this means isLoggedIn = true
  const handleLogin = (isLoggedIn, email, firstName, lastName) => {
    setLoggedIn(isLoggedIn);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
  };

  return (
    <AuthContext.Provider value={{ loggedIn,firstName, lastName, handleLogin, setLastName }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
