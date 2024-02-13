"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { PlusIcon } from '@radix-ui/react-icons';
import { MinusIcon } from '@radix-ui/react-icons';

import { Button } from './ui/button';
import { useCartContext } from '@/helpers/Context/CartContext';

interface CartCardProps {
  coffee_title: string;
  custom_coffee_title: string;
  size: string;
  price: string;
  coffeeId: any;
}
  


export default function CartCard({coffee_title, size, price, coffeeId, custom_coffee_title}: CartCardProps) {
  const [quantity, setQuantity] = useState<number>(1); // État local pour suivre la quantité de café
  const { removeCoffee } = useCartContext();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1); // Augmenter la quantité de 1
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); 
      removeCoffee(coffeeId);// Diminuer la quantité de 1, avec une condition pour éviter les quantités négatives
    }
  };
  return (
    <div>
      <Card className="flex rounded-3xl w-[335px] h-[116px]">
        <div className="flex justify-center items-center px-2">
          <img src="/images/coffee2.png" alt="coffees" width={80} height={80} />
        </div>
        <CardContent className="flex-col justify-center items-center py-4">
          <div>
            <p className="font-semibold text-sm text-brown-create">{size}</p>
            <p className="font-semibold text-lg text-brown-dark">
              {coffee_title} {custom_coffee_title}
            </p>
          </div>
          <div className="flex gap-16">
            <p className="font-semibold text-normal mt-2 text-brown-create">
              {price} $
            </p>
            <div>
              <div className="flex justify-end items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    handleDecreaseQuantity();
                    removeCoffee(coffeeId);
                  }}
                
                >
                  <MinusIcon />
                </Button>
                <p>{quantity}</p> {/* Afficher la quantité */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleIncreaseQuantity}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
