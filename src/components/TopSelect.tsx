import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Topping {
  id: number;
  topping_name: string;
}

interface TopSelectProps {
  onSelectTopping: (toppingID: number) => void; // Fonction de rappel pour envoyer l'ID du topping sélectionné au composant parent
}

export function TopSelect({ onSelectTopping }: TopSelectProps) {
  const [toppings, setToppings] = useState<Topping[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/toppings')
      .then(response => response.json())
      .then(data => setToppings(data))
      .catch(error => console.error('Error fetching toppings:', error));
  }, []);

  const handleSelectTopping = (toppingID: number) => {
    onSelectTopping(toppingID); // Appel de la fonction de rappel avec l'ID du topping sélectionné
  };

  return (
    <Select>
      <Label>Choose your topping</Label>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {toppings.map(topping => (
            <SelectItem key={topping.id} value={topping.topping_name} onSelect={() => handleSelectTopping(topping.id)}>
              {topping.topping_name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
