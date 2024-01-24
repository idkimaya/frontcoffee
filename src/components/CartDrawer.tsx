import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import CartCard from "./CartCard";
import { ScrollArea } from "./ui/scroll-area";


export function CartDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Image src="/images/cart.svg" width={25} height={25} alt="cart" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-brown-dark flex justify-center items-center">
          <SheetTitle className="text-2xl font-bold">YOUR CART</SheetTitle>
          <SheetDescription>Your cart is currently empty.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[530px]">
          <div className="space-y-8">
            <CartCard />
          </div>
          <div className="py-2">
            <h1 className="font-bold text-xl text-brown-dark py-4">CRÉATIONS</h1>
            <CartCard />
          </div>
        </ScrollArea>
        <div className="absolute inset-x-0 bottom-0 px-4">
          <div>
            <SheetDescription className="font-semibold text-2xl flex justify-between text-brown-dark">
              Subtotal :
              <div>
                <p>13$</p>
              </div>
            </SheetDescription>
          </div>
          <SheetFooter className="py-5">
            <SheetClose asChild>
              <Button variant="card" size="lg" type="submit">
                Check out
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
