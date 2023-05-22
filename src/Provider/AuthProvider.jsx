import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("state changed to " + currentUser);
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const info = {
    user,
    createUser,
    signInUser,
    auth,
    setUser,
    setLoading,
    loading,
    isOpen,
    setIsOpen,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
