'use client'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';



export default function Details() {

  
  // const handleToggleFavorite = async () => {
  //   try {
  //     const response = await fetch('/api/favorites', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ productId: yourProductId }),
  //     });

  //     if (response.ok) {
  //       setIsFilled(!isFilled);
  //     } else {
  //       console.error('Error adding to favorites:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error adding to favorites:', error.message);
  //   }
  // };

  return (
    <section className="container prose pt-4 mr-auto ml-auto min-h-screen">
      <div className="lg:flex justify-center items-center lg:space-x-24">
        <div className="flex justify-center items-center">
          <img
            src="/images/coffee2.png"
            alt="coffee mockup"
            width={300}
            height={200}
            className="shadow-2xl rounded-full lg:w-[407px]"
          />
        </div>
        <div className="px-4 py-8">
          <div className="flex-col">
            <div className="space-y-4 mb-4">
              <h1 className="font-bold text-brown-create text-3xl">
                Cappucinno
              </h1>
              <p className="font-semibold text-lg">11.8 $</p>
              <p className="text-brown-dark text-sm mb-8">
                Coffee made by user <span className="font-bold">Ayasan</span>{" "}
              </p>
            </div>
            <Separator />

            <div className="mt-8">
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
            <div className="py-6">
              <h1 className="font-bold text-brown-create text-lg">
                Description
              </h1>
              <p className="text-sm">
                This is the description i have to chose
              </p>
            </div>

            <div className='mb-8 space-y-2'>
              <h1 className="font-bold text-brown-create text-lg">Temperature :</h1>
              <p className="text-sm">
                Chaud
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <Button variant="card" size="lg">
              <Link href="/details">Add to cart</Link>
            </Button>
            <Button variant="card" size="lg">
              Add to favorite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
