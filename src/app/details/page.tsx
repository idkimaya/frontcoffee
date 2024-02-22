// 'use client'
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { Label } from '@radix-ui/react-label';
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// interface CoffeeDetails {
//   id: string;
//   coffee_title: string;
//   price: number;
//   image: string;
//   size: string;
//   description: string;
//   coffeeId: any;
//   // temperature: string;
// }

// export default function Details({coffee_title, price, size, description}: CoffeeDetails ) {
//   const router = useRouter();
//   const { id } = router;
//   const [coffeeDetails, setCoffeeDetails] = useState<CoffeeDetails | null>(null);

//   useEffect(() => {
//     const fetchCoffeeDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/coffees/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setCoffeeDetails(data);
//         } else {
//           throw new Error('Failed to fetch coffee details');
//         }
//       } catch (error) {
//         console.error('Error fetching coffee details:', error);
//       }
//     };

//     if (id) {
//       fetchCoffeeDetails();
//     }
//   }, [id]);

//   if (!coffeeDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="container prose pt-4 mr-auto ml-auto min-h-screen">
//       <div className="lg:flex justify-center items-center lg:space-x-24">
//         <div className="flex justify-center items-center">
//           <img
//             src="/images/coffee2.png"
//             alt="coffee mockup"
//             width={300}
//             height={200}
//             className="shadow-2xl rounded-full lg:w-[407px]"
//           />
//         </div>
//         <div className="px-4 py-8">
//           <div className="flex-col">
//             <div className="space-y-4 mb-4">
//               <h1 className="font-bold text-brown-create text-3xl">
//                 {coffee_title}
//               </h1>
//               <p className="font-semibold text-lg">{price} $</p>
//             </div>
//             <Separator />

//             <div className="mt-8">
//               <RadioGroup defaultValue={size} className="flex py-2">
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value={size} id={size} />
//                   <Label htmlFor={size}>{size}</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//             <div className="py-6">
//               <h1 className="font-bold text-brown-create text-lg">
//                 Description
//               </h1>
//               <p className="text-sm">{description}</p>
//             </div>

//             <div className="mb-8 space-y-2">
//               <h1 className="font-bold text-brown-create text-lg">
//                 Temperature :
//               </h1>
//               {/* <p className="text-sm">{temperature}</p> */}
//             </div>
//           </div>

//           <div className="flex flex-col space-y-4">
//             <Button variant="card" size="lg">
//               <Link href="/favorite">Add to cart</Link>
//             </Button>
//             <Button variant="card" size="lg">
//               Add to favorite
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
