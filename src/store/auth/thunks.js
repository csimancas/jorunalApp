import {
  signInWithGoogle,
  registerUser,
  loginWithEmailPassword,
} from "../../firebase/provider";
import { chekingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUser({
      displayName,
      email,
      password,
    });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ displayName, email, uid, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  console.log("THUNKS", email, password);
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    console.log(result);

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};
