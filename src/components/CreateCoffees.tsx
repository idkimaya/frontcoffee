import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MilkSelect } from './MilkSelect';
import { FlavorSelect } from './FlavorSelect';
import { TopSelect } from './TopSelect';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';



export default function CreateCoffees() {
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
          />
          <div>
            <RadioGroup defaultValue="comfortable" className="flex py-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Small" id="r1" />
                <Label htmlFor="r1">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Medium" id="r2" />
                <Label htmlFor="r2">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Large" id="r2" />
                <Label htmlFor="r2">Large</Label>
              </div>
            </RadioGroup>
          </div>
          <MilkSelect />
          <FlavorSelect />
          <TopSelect />
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Choisi t'as déscription</Label>
            <Textarea placeholder="Type your description here." id="message" />
          </div>
          <div>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Froid" id="r1" />
                <Label htmlFor="r1">Froid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Chaud" id="r2" />
                <Label htmlFor="r2">Chaud</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2.5 pb-5">
            <Label htmlFor="title">Choisis ton prix</Label>
            <Input id="price" type="text" placeholder="Ex. 2.5$" />
            <p className="text-sm text-muted-foreground">Maximum price is 7$</p>
            <Button variant="card">Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
