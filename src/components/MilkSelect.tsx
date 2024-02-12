import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MilkType {
  id: number;
  milk_type: string;
}

interface MilkSelectProps {
  onSelectMilk: (milkTypeID: number) => void; // Fonction de rappel pour envoyer l'ID du type de lait sélectionné au composant parent
}

export function MilkSelect({ onSelectMilk }: MilkSelectProps) {
  const [milkTypes, setMilkTypes] = useState<MilkType[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/milk-types')
      .then(response => response.json())
      .then(data => setMilkTypes(data))
      .catch(error => console.error('Error fetching milk types:', error));
  }, []);

  const handleSelectMilk = (milkTypeID: number) => {
    onSelectMilk(milkTypeID); // Appel de la fonction de rappel avec l'ID du type de lait sélectionné
  };

  return (
    <Select>
      <Label>Choose your milk</Label>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {milkTypes.map(milkType => (
            <SelectItem key={milkType.id} value={milkType.milk_type} onSelect={() => handleSelectMilk(milkType.id)}>
              {milkType.milk_type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
