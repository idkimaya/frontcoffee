"use client"
import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';
import { CreateModal } from './CreateModal';

interface CreatedCoffee {
    custom_coffee_title: string;
    id: number;
    size: string;
    price: any;
    description: string;
}

export default function CreatedCoffeeList() {
    const [createdCoffees, setCreatedCoffees] = useState<CreatedCoffee[]>([]);
    const [selectedCoffee, setSelectedCoffee] = useState<CreatedCoffee | null>(null);

    useEffect(() => {
        const fetchCreatedCoffees = async () => {
            try {
                const response = await fetch('http://localhost:5000/user-created-coffees', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCreatedCoffees(data);
            } catch (error) {
                console.error('Error fetching user-created coffees:', error);
            }
        };

        fetchCreatedCoffees();
    }, []);

    const handleCoffeeClick = (coffee: CreatedCoffee) => {
        setSelectedCoffee(coffee);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-16 mb-12">
            {createdCoffees.map(coffee => (
                <div key={coffee.id} onClick={() => handleCoffeeClick(coffee)}>
                    <CoffeeCard 
                        title={coffee.custom_coffee_title}
                        price={coffee.price}
                        size={coffee.size}
                        image={'/images/coffee2.png'} 
                    />
                </div>
            ))}
            {selectedCoffee && <CreateModal coffee={selectedCoffee} onClose={() => setSelectedCoffee(null)} />}
        </div>
    );
}
