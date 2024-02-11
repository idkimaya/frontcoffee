// import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react";
// import Cookies from 'js-cookie';

// // Interface pour le contexte
// interface UserContextType {
//   user: User | null;
//   token: string | null; // Ajoutez une propriété pour stocker le token
//   handleReloadUser: () => void;
// }

// // Créer le contexte utilisateur
// const UserContext = createContext<UserContextType | undefined>(undefined);

// // Hook personnalisé pour utiliser le contexte utilisateur
// export function useUserContext() {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUserContext must be used within a UserProvider");
//   }
//   return context;
// }

// // Propriétés attendues pour le composant UserProvider
// interface UserProviderProps {
//   children: ReactNode;
// }

// // Composant UserProvider
// export function UserProvider({ children }: UserProviderProps) {
//   const [reload, setReload] = useState(true);
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null);

//   // Fonction pour recharger l'utilisateur
//   const handleReloadUser = () => {
//     setReload(!reload);
//   };

//   // Effet pour récupérer le token depuis les cookies lors du chargement initial
//   useEffect(() => {
//     const tokenFromCookie = Cookies.get('token');
//     setToken(tokenFromCookie);
//   }, []);

//   // Autres effets ou logique pour charger ou gérer l'utilisateur

//   // Créer une valeur de contexte
//   const contextValue: UserContextType = useMemo(() => {
//     return { user, token, handleReloadUser };
//   }, [user, token, handleReloadUser]);

//   // Rendre le contexte disponible pour les composants enfants
//   return (
//     <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
//   );
// }
