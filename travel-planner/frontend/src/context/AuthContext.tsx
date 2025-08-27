import { createContext, useContext, type ReactNode } from "react";

export const AuthContext = createContext({ isAuthenticated: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthContext.Provider value={{ isAuthenticated: true }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);