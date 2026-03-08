import { login, register, getCurrentUser, logout } from "../services/auth.api";
import { useContext } from "react";
import { AuthContext } from "../auth.context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const registerUser = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async ({ email, password, username }) => {
    setLoading(true);
    try {
      const data = await login({ email, password, username });
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const data = await getCurrentUser();
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.error("Failed to get user:", error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      const data = await logout();
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log("Failed to logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    registerUser,
    loginUser,
    getUser,
    logoutUser,
  };
};
