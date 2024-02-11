"use client"
import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';
import Link from 'next/link';
import { ModalCoffee } from './ModalCoffee';

interface Coffee {
    coffee_title: string;
    id: number;
    size: string;
    price: any;
    description: string;
}

const {COFFEE_BACK}  = process.env;

export default function CoffeesList() {
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                const response = await fetch('http://localhost:5000/coffees', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCoffees(data);
            } catch (error) {
                console.error('Error fetching coffees:', error);
            }
        };

        fetchCoffees();
    }, []);

    const handleCoffeeClick = (coffee: Coffee) => {
        setSelectedCoffee(coffee);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-16 mb-12">
            {coffees.map(coffee => (
                <div key={coffee.id} onClick={() => handleCoffeeClick(coffee)}>
                    
                <CoffeeCard 
                  title={coffee.coffee_title}
                  price={coffee.price}
                  size={coffee.size}
                  image={'/images/coffee2.png'} 
                   />
                </div>
            ))}
            {selectedCoffee && <ModalCoffee coffee={selectedCoffee} onClose={() => setSelectedCoffee(null)} />}
        </div>
    );
}
