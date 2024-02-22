"use client"
import React, { createContext, useContext, useState } from 'react';

// Interface pour définir le type des cafés
interface Coffee {
  id: number;
  coffee_title: string;
  custom_coffee_title: string;
  size: string;
  price: any;
  quantity: number; // Ajouter la quantité au type Coffee
}

// Interface pour définir le type du contexte
interface CartContextType {
  selectedCoffees: Coffee[];
  total: number;
  addCoffee: (coffee: Coffee) => void;
  handleModifyQuantity: (id: number, newQuantity: number) => void; // Ajouter handleModifyQuantity
  removeCoffee: any;
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
  const [total, setTotal] = useState<number>(0); // Initialiser le total à 0

  // Fonction pour ajouter un café au panier
  const addCoffee = (coffee: Coffee) => {
    setSelectedCoffees([...selectedCoffees, coffee]);
    setTotal(total + coffee.price); // Mettre à jour le total lors de l'ajout d'un café
  };

  // Fonction pour supprimer un café du panier
  const removeCoffee = (coffeeId: number) => {
    const updatedCoffees = selectedCoffees.filter(coffee => coffee.id !== coffeeId);
    setSelectedCoffees(updatedCoffees);
    const removedCoffee = selectedCoffees.find(coffee => coffee.id === coffeeId);
    if (removedCoffee) {
      setTotal(total - removedCoffee.price);
    }
  };

  // Fonction pour modifier la quantité d'un café dans le panier
  const handleModifyQuantity = (id: number, newQuantity: number) => {
    setSelectedCoffees(prevCoffees => prevCoffees.map(coffee => {
      if (coffee.id === id) {
        const totalPrice = coffee.price * newQuantity;
        setTotal(total + (totalPrice - coffee.price * coffee.quantity)); // Mettre à jour le total en tenant compte de la nouvelle quantité
        return { ...coffee, quantity: newQuantity, totalPrice };
      }
      return coffee;
    }));
  };

  const contextValue = {
    selectedCoffees,
    total,
    addCoffee,
    handleModifyQuantity,
    removeCoffee
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
