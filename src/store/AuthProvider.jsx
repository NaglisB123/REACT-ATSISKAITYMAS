import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
  userEmail: "",
  isLoggedIn: false,
});

export default function AuthProvider(props) {
  const [fireUser, setFireUser] = useState(auth.currentUser);

  const userEmail = fireUser?.email;
  const userUid = fireUser?.uid;
  let isLoggedIn = !!userEmail;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("LOGGED IN");
        setFireUser(user);
      } else {
        console.log("LOGGED OUT");
        setFireUser({});
      }
    });
  }, []);

  const ctx = {
    userEmail: userEmail,
    isLoggedIn: isLoggedIn,
    userUid: userUid,
  };

  return (
    // eslint-disable-next-line react/prop-types
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
