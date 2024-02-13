import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MilkSelect } from './MilkSelect';
import { FlavorSelect } from './FlavorSelect';
import { TopSelect } from './TopSelect';
import { Textarea } from "@/components/ui/textarea";
import { Button } from './ui/button';
import { useUser } from '@/helpers/Context/UserContext';
import { useToast } from './ui/use-toast';


interface CoffeeData {
  custom_coffee_title: string;
  size: string;
  description: string;
  price: number;
  milkTypeID: number | null;
  flavor_name: number | null;
  toppingID: number | null;
  userID: number | null;
  showError: boolean;
}

export default function CreateCoffees() {
  const {toast} = useToast();
  const { user } = useUser();
  const [coffeeData, setCoffeeData] = useState<CoffeeData>({
    custom_coffee_title: "",
    size: '',
    description: '',
    price: 0,
    milkTypeID: null as number | null,
    flavor_name: null as number | null,
    toppingID: null as number | null,
    userID: user ? user.id : null,
    showError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-created-coffees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ coffeeData })
        });
        if (response.ok) {
          const data = await response.json();
          setCoffeeData(data);
          toast({
            variant: "success",
            title: "Connexion reussie !",
          })
        } else {
          throw new Error('Une erreur est survenue.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données : ', error);
        toast({
          variant: "destructive",
          title: "une erreur est survenu",
        })
      }
    
    };
    fetchData();
  }, []);

  const handleCreateCoffee = () => {
    console.log("Créer un café avec les données suivantes : ", coffeeData);
  };

  const handleInputChange = (e: { target: { value: string; }; }) => {
    const value = parseFloat(e.target.value);
    // Vérifie si la valeur saisie est un nombre valide
    if (!isNaN(value)) {
      // Si c'est le cas, vérifie si la valeur dépasse le maximum de 7$
      if (value > 7) {
        // Si la valeur est supérieure à 7$, activez la phrase "Maximum price is 7$"
        setCoffeeData({ ...coffeeData, price: value, showError: true });
      } else {
        // Sinon, désactivez la phrase
        setCoffeeData({ ...coffeeData, price: value, showError: false });
      }
    }
  };


  return (
    <div>
      <h1 className="font-bold text-brown-create text-xl mb-8">
        {coffeeData.custom_coffee_title || "Iced coffee from Lyon"}
      </h1>
      <div>
        <div className="flex flex-col space-y-2.5">
          <Label htmlFor="custom_coffee_title">Choisis un nom</Label>
          <Input
            className=""
            id="custom_coffee_title"
            type="text"
            placeholder=" Ex. Aya’s coffee"
            value={coffeeData.custom_coffee_title}
            onChange={(e) =>
              setCoffeeData({
                ...coffeeData,
                custom_coffee_title: e.target.value,
              })
            }
          />
          <div className="py-2">
            <div className="flex items-center space-x-4">
              <Input
                type="text"
                value={coffeeData.size}
                placeholder="Small"
                id="size"
                onChange={() => setCoffeeData({ ...coffeeData, size: "" })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                value={coffeeData.size}
                id="size"
                placeholder="Medium"
                onChange={() => setCoffeeData({ ...coffeeData, size: "" })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                value={coffeeData.size}
                placeholder="Large"
                id="size"
                onChange={() => setCoffeeData({ ...coffeeData, size: "" })}
              />
            </div>
          </div>

          <MilkSelect
            onSelectMilk={(milkTypeID) =>
              setCoffeeData({ ...coffeeData, milkTypeID })
            }
          />
          <FlavorSelect
            onSelectFlavor={(flavor_name) =>
              setCoffeeData({ ...coffeeData, flavor_name })
            }
          />
          <TopSelect
            onSelectTopping={(toppingID) =>
              setCoffeeData({ ...coffeeData, toppingID })
            }
          />
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Choisi ta déscription</Label>
            <Textarea
              placeholder="Type your description here."
              id="message"
              value={coffeeData.description}
              onChange={(e) =>
                setCoffeeData({ ...coffeeData, description: e.target.value })
              }
            />
          </div>
          <div className="space-y-2.5 pb-5">
            <Label htmlFor="title">Choisis ton prix</Label>
            <Input
              id="price"
              type="number"
              placeholder="Ex. 2.5$"
              value={coffeeData.price} // Assurez-vous que la valeur est une chaîne de caractères
              onChange={(e) => {
                handleInputChange(e); // Utilisez handleInputChange pour la validation
                setCoffeeData({ ...coffeeData, price: e.target.value }); // Mettez à jour l'état avec la nouvelle valeur
              }}
            />

            <p className="text-sm text-muted-foreground">Maximum price is 7$</p>

            <Button variant="card" onClick={handleCreateCoffee}>
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
//tu en etait au user qui doit etre inclu dans la creation, puis pour faciliter il faut 
//un userconetxt et faire le login, AuthGuard pour back et front 
