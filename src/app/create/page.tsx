'use client'
import CreateCoffees from '@/components/CreateCoffees'
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link';



export default function CreateYourOwn() {


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
      <div className="lg:flex justify-center items-center lg:space-x-16">
        <img src="/images/createimg.png" alt="coffee mockup" width={507}
            height={510} className="lg:mb-24"/>
        <div className="px-4 py-8">
          <ScrollArea className="h-[460px] ">
            <CreateCoffees />
          </ScrollArea>
          <div className="flex flex-col space-y-4 mt-8">
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
