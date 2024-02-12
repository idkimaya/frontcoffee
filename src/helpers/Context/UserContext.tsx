"use client"
// // userContext.tsx
// import React, { createContext, useContext, useState } from "react";

// // Interface pour l'utilisateur
// interface User {
//   username: string;
//   password: string;
//   email: string;
//   // définissez les propriétés de votre utilisateur ici
// }

// // Interface pour le contexte utilisateur
// interface UserContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// // Créer un contexte pour l'utilisateur
// const UserContext = createContext<UserContextType | undefined>(undefined);

// // Hook personnalisé pour accéder au contexte de l'utilisateur
// export function useUserContext(): UserContextType {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUserContext must be used within a UserProvider");
//   }
//   return context;
// }

// // Fournisseur de contexte pour l'utilisateur
// export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
//   const [user, setUser] = useState<User | null>(null);

//   const contextValue: UserContextType = {
//     user,
//     setUser
//   };

//   return (
//     <UserContext.Provider value={contextValue} >
//       {children}
//     </UserContext.Provider>
//   );
// }



// userContext.ts
import { createContext, useContext, useEffect, useState } from 'react';

// Interface pour le contexte utilisateur
interface User {
    username: string;
    password?: string;
    email: string;
  // définissez les propriétés de votre utilisateur ici
}

// Interface pour le contexte
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Créer un contexte pour l'utilisateur
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook personnalisé pour accéder au contexte de l'utilisateur
export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// Fournisseur de contexte pour l'utilisateur
export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  // Fonction pour connecter l'utilisateur
  const login = (userData: User): void => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
    handleRedirect("/login"); // Rediriger vers la page de connexion après la déconnexion
  };

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté en consultant le stockage local
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRedirect = (url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

  const contextValue: UserContextType = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}


















// // import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react";
// // import Cookies from 'js-cookie';

// // // Interface pour le contexte
// // interface UserContextType {
// //   user: User | null;
// //   token: string | null; // Ajoutez une propriété pour stocker le token
// //   handleReloadUser: () => void;
// // }

// // // Créer le contexte utilisateur
// // const UserContext = createContext<UserContextType | undefined>(undefined);

// // // Hook personnalisé pour utiliser le contexte utilisateur
// // export function useUserContext() {
// //   const context = useContext(UserContext);
// //   if (context === undefined) {
// //     throw new Error("useUserContext must be used within a UserProvider");
// //   }
// //   return context;
// // }

// // // Propriétés attendues pour le composant UserProvider
// // interface UserProviderProps {
// //   children: ReactNode;
// // }

// // // Composant UserProvider
// // export function UserProvider({ children }: UserProviderProps) {
// //   const [reload, setReload] = useState(true);
// //   const [user, setUser] = useState<User | null>(null);
// //   const [token, setToken] = useState<string | null>(null);

// //   // Fonction pour recharger l'utilisateur
// //   const handleReloadUser = () => {
// //     setReload(!reload);
// //   };

// //   // Effet pour récupérer le token depuis les cookies lors du chargement initial
// //   useEffect(() => {
// //     const tokenFromCookie = Cookies.get('token');
// //     setToken(tokenFromCookie);
// //   }, []);

// //   // Autres effets ou logique pour charger ou gérer l'utilisateur

// //   // Créer une valeur de contexte
// //   const contextValue: UserContextType = useMemo(() => {
// //     return { user, token, handleReloadUser };
// //   }, [user, token, handleReloadUser]);

// //   // Rendre le contexte disponible pour les composants enfants
// //   return (
// //     <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
// //   );
// // }
