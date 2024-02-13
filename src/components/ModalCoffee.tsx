import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';
import { useCartContext } from "@/helpers/Context/CartContext";


interface Coffee {
  coffee_title: string;
  id: number;
  size: string;
  price: any;
  description: string;
  custom_coffee_title: string;
  coffee: any;
//   temperature: string;
}

interface ModalCoffeeProps {
  coffee: Coffee;
  onClose: () => void;
}

export function ModalCoffee({ coffee, onClose }: ModalCoffeeProps) {
    const { addCoffee } = useCartContext(); // Importez la fonction addCoffee depuis le contexte

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogTrigger>
        <Button variant="outline">Close</Button>
      </DialogTrigger>
      <DialogContent className="container prose pt-4 mr-auto ml-auto min-h-screen">
        <div className="justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src="/images/coffee2.png"
              alt="coffee mockup"
              width={300}
              height={200}
              className="shadow-2xl rounded-full "
            />
          </div>
          <div className="px-4 py-8">
            <div className="flex-col">
              <div className="space-y-4 mb-4">
                <h1 className="font-bold text-brown-create text-3xl">
                  {coffee.coffee_title}
                </h1>
                <p className="font-semibold text-lg">{coffee.price} $</p>
              </div>
              <Separator />
              <div className="mt-8">
                <h1 className="font-bold text-brown-create text-lg">
                  Description
                </h1>
                <p className="text-sm">{coffee.description}</p>
              </div>
            
            </div>

            <div className="flex justify-center items-center flex-col space-y-4 mt-8">
              <Button variant="card" size="lg" onClick={() => addCoffee(coffee)}>
                Add to cart
              </Button>
              <Button variant="card" size="lg">
                Add to favorite
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
