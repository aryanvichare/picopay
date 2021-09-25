import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  createFactory,
} from "react";
import { useNavigation } from "@react-navigation/core";
import { createUser } from "./firestore";
import firebase, { auth, firestore } from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser, extra = null) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      const { token, ...userWithoutToken } = user;
      await createUser(user.uid, { ...userWithoutToken, ...extra });

      setUser({ ...user, ...extra });
    } else {
      setUser(false);
      return false;
    }
  };

  const createAccountWithEmailAndPassword = (name, email, password) => {
    if (!email || !name || !password) return;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        handleUser(user, { name });
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  const signInWithEmailAndPassword = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleUser(user);
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        return { type: "error", message: errorMessage };
      });
  };

  const signInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => handleUser(response.user));
  };

  const signInWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => handleUser(response.user));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (rawUser) => {
      let extra = {};

      if (rawUser) {
        const docRef = firestore.collection("users").doc(rawUser.uid).get();
        const data = (await docRef).data();

        extra = { name: data.name };
      }

      handleUser(rawUser, extra);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    createAccountWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGithub,
    signInWithTwitter,
    signOut,
  };
}

const formatUser = async (user) => {
  const token = user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    provider: user?.providerData[0]?.providerId,
    token,
  };
};
