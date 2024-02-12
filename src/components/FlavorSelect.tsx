import React, { useState, useEffect } from 'react';
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Flavor {
  id: number;
  flavor_name: string;
}

interface FlavorSelectProps {
  onSelectFlavor: (flavorID: number) => void; // Fonction pour envoyer l'ID de saveur sélectionné à un composant parent
}

export function FlavorSelect({ onSelectFlavor }: FlavorSelectProps) {
  const [flavors, setFlavors] = useState<Flavor[]>([]); // État local pour stocker les saveurs récupérées depuis l'API
  const [selectedFlavor, setSelectedFlavor] = useState<string>(''); // État local pour stocker la saveur sélectionnée

  useEffect(() => {
    // Effectue une requête GET pour récupérer les saveurs depuis l'API
    fetch('http://localhost:5000/flavors')
      .then(response => response.json())
      .then(data => setFlavors(data))
      .catch(error => console.error('Error fetching flavors:', error));
  }, []); // Effectue la requête uniquement une fois après le premier rendu

  const handleSelectFlavor = (flavorID: number) => {
    setSelectedFlavor(flavorID.toString()); // Mettre à jour la saveur sélectionnée dans l'état local
    onSelectFlavor(flavorID); // Envoyer l'ID de la saveur sélectionnée au composant parent
  };

  return (
    <Select>
      <Label>Choisi ton goût</Label>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {flavors.map(flavor => (
            <SelectItem key={flavor.id} value={flavor.flavor_name} onSelect={() => handleSelectFlavor(flavor.id)}>
              {flavor.flavor_name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
