"use client"
import React, { createContext, useContext, useState, useEffect} from 'react';

// Interface pour définir le type des cafés
interface Coffee {
  id: number;
  coffee_title: string;
  custom_coffee_title: string;
  size: string;
  price: any;
}

// Interface pour définir le type du contexte
interface CartContextType {
  selectedCoffees: Coffee[];
  addCoffee: (coffee: Coffee) => void;
}

// Créez le contexte global
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}

// Propriétés attendues pour le composant CartProvider
interface CartProviderProps {
  children: React.ReactNode;
}

// Composant CartProvider
export function CartProvider({ children }: CartProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>([]);

  // Fonction pour récupérer la liste des cafés dans le panier
  const fetchCoffees = async () => {
    try {
      const response = await fetch('http://localhost:5000/orders');
      const data = await response.json();
      setSelectedCoffees(data);
    } catch (error) {
      console.error('Error fetching coffees:', error);
    }
  };

  useEffect(() => {
    fetchCoffees();
  }, []); // Appelé une seule fois au chargement initial

  // Fonction pour ajouter un café au panier
  const addCoffee = async (coffee: Coffee) => {
    try {
      await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coffee),
      });
      // Après l'ajout d'un café, mettez à jour la liste des cafés
      fetchCoffees();
    } catch (error) {
      console.error('Error adding coffee to cart:', error);
    }
  };

  // Fonction pour supprimer un café de la commande
  const deleteCoffee = async (coffeeId: number) => {
    try {
      await fetch(`http://localhost:5000/orders/${coffeeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Après la suppression d'un café, mettez à jour la liste des cafés
      fetchCoffees();
    } catch (error) {
      console.error('Error deleting coffee from cart:', error);
    }
  };

  const contextValue = {
    selectedCoffees,
    addCoffee,
    deleteCoffee,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
