import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("drZoeAuth") === "true";
  });

  const login = (username: string, password: string): boolean => {
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
      localStorage.setItem("drZoeAuth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("drZoeAuth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
