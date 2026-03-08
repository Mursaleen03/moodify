import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true, // Include cookies in requests
});

export const register = async (username, email, password) => {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const login = async (email, password, username) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getCurrentUser = async () =>{
    try {
        const response = await api.get("/get-me");
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

export const logout = async () =>{
    try {
        const response = await api.get("/logout");
        return response.data;
    } catch (error) {
        console.log("Error logging out:", error);
        throw error;
    }
}