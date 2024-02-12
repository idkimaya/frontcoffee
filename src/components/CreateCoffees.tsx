import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MilkSelect } from './MilkSelect';
import { FlavorSelect } from './FlavorSelect';
import { TopSelect } from './TopSelect';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from './ui/button';

export default function CreateCoffees() {
  const [coffeeData, setCoffeeData] = useState({
    custom_coffee_title: '',
    size: '',
    description: '',
    price: '',
    milkTypeID: null as number | null,
    flavorID: null as number | null,
    toppingID: null as number | null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-created-coffees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ /* data you want to send */ })
        });
        const data = await response.json();
        setCoffeeData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    };
    fetchData();
  }, []);

  const handleCreateCoffee = () => {
    // Ici, vous pouvez envoyer les données du café au serveur ou effectuer d'autres actions en fonction de vos besoins.
    console.log("Créer un café avec les données suivantes : ", coffeeData);
  };

  return (
    <div>
      <h1 className="font-bold text-brown-create text-xl mb-8">
        Iced coffee from Lyon
      </h1>
      <div>
        <div className="flex flex-col space-y-2.5">
          <Label htmlFor="title">Choisis un nom</Label>
          <Input
            className=""
            id="title"
            type="text"
            placeholder=" Ex. Aya’s coffee"
            value={coffeeData.custom_coffee_title}
            onChange={(e) => setCoffeeData({ ...coffeeData, custom_coffee_title: e.target.value })}
          />
          <div>
            <RadioGroup defaultValue="comfortable" className="flex py-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Small"
                  id="r1"
                  checked={coffeeData.size === 'Small'}
                  onChange={() => setCoffeeData({ ...coffeeData, size: 'Small' })}
                />
                <Label htmlFor="r1">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Medium"
                  id="r2"
                  checked={coffeeData.size === 'Medium'}
                  onChange={() => setCoffeeData({ ...coffeeData, size: 'Medium' })}
                />
                <Label htmlFor="r2">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Large"
                  id="r3"
                  checked={coffeeData.size === 'Large'}
                  onChange={() => setCoffeeData({ ...coffeeData, size: 'Large' })}
                />
                <Label htmlFor="r3">Large</Label>
              </div>
            </RadioGroup>
          </div>
          <MilkSelect onSelectMilk={(milkTypeID) => setCoffeeData({ ...coffeeData, milkTypeID })} />
          <FlavorSelect onSelectFlavor={(flavorID) => setCoffeeData({ ...coffeeData, flavorID })} />
          <TopSelect onSelectTopping={(toppingID) => setCoffeeData({ ...coffeeData, toppingID })} />
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Choisi t'as déscription</Label>
            <Textarea
              placeholder="Type your description here."
              id="message"
              value={coffeeData.description}
              onChange={(e) => setCoffeeData({ ...coffeeData, description: e.target.value })}
            />
          </div>
          <div>
            {/* <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Cold"
                  id="r4"
                  checked={coffeeData.temperature === 'Cold'}
                  onChange={() => setCoffeeData({ ...coffeeData, temperature: 'Cold' })}
                />
                <Label htmlFor="r4">Froid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Hot"
                  id="r5"
                  checked={coffeeData.temperature === 'Hot'}
                  onChange={() => setCoffeeData({ ...coffeeData, temperature: 'Hot' })}
                />
                <Label htmlFor="r5">Chaud</Label>
              </div>
            </RadioGroup> */}
          </div>
          <div className="space-y-2.5 pb-5">
            <Label htmlFor="title">Choisis ton prix</Label>
            <Input
              id="price"
              type="text"
              placeholder="Ex. 2.5$"
              value={coffeeData.price}
              onChange={(e) => setCoffeeData({ ...coffeeData, price: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">Maximum price is 7$</p>
            <Button variant="card" onClick={handleCreateCoffee}>Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
//tu en etait au user qui doit etre inclu dans la creation, puis pour faciliter il faut 
//un userconetxt et faire le login, AuthGuard pour back et front 
