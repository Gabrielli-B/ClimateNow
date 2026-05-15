import { createContext, useContext, useState,useEffect } from "react";
import type { ReactNode } from "react";

type User ={
    name: string;
    email: string;
    password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
   const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("@user");

    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);

  function register(userData: User) {
    localStorage.setItem(
      "@registeredUser",
      JSON.stringify(userData)
    );
  }

  function login(email: string, password: string) {
    const registeredUser = localStorage.getItem("@registeredUser");

    if (!registeredUser) {
      return false;
    }

    const parsedUser: User = JSON.parse(registeredUser);

    const emailCorrect =
      parsedUser.email === email;

    const passwordCorrect =
      parsedUser.password === password;

    if (emailCorrect && passwordCorrect) {
      localStorage.setItem(
        "@user",
        JSON.stringify(parsedUser)
      );

      setUser(parsedUser);

      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("@user");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}