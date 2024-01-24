import React, { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface CoffeeCardProps {
  title: string;
  price: string;
  size: string;
  image: string;
  children?: ReactNode;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  title,
  price,
  size,
  image,
  children,
}) => {
  return (
    <div className="w-[220px] h-[235px] rounded-[40px] shadow bg-brown">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="Coffees image"
          width={40}
          height={40}
          className="h-28 w-28 flex-row mb-4 absolute"
          style={{
            boxShadow: "0px 30px 50px -30px black",
            borderRadius: "100px",
          }}
        />
      </div>

      <div className="flex justify-start items-start px-5 mt-16">
        <div className="flex-row space-x-1 space-y-2 z-10 mb-8">
          <p className="font-bold text-2xl text-white">{title}</p>
          <p className="font-bold text-lg text-white">
            <span className="text-brown-card mr-2">Size: </span>
            {size}
          </p>
        </div>
      </div>

      <div className="flex space-x-12">
        {children}
        {price && (
          <p className="text-2xl font-bold text-white px-5 mt-4">{price} $</p>
        )}
        <div className=" flex justify-center items-center bg-white rounded-full w-[60px] h-[60px] shadow-2xl">
          <Button variant="add">
            <PlusCircledIcon className="w-[30px] h-[30px] text-brown-dark" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
