import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CrossCircledIcon, PlusIcon } from '@radix-ui/react-icons';
import { MinusIcon } from '@radix-ui/react-icons';

import { Button } from './ui/button';
  


export default function CartCard() {
  return (
    <div>
      <Card className="flex rounded-3xl w-[335px] h-[116px]">
        <div className="flex justify-center items-center px-2">
          <img src="/images/coffee2.png" alt="coffees" width={80} height={80} />
        </div>
        <CardContent className="flex-col justify-center items-center py-4">
          <div>
            <p className="font-semibold text-sm text-brown-create">Medium</p>
            <p className="font-semibold text-lg text-brown-dark">Cappuccino</p>
          </div>
          <div className="flex gap-16">
            <p className="font-semibold text-normal mt-2 text-brown-create">
              3.9 $
            </p>
            <div>
              <div className="flex justify-end items-center">
                <Button variant="ghost" size="sm">
                  <MinusIcon />
                </Button>
                <p>2</p>
                <Button variant="ghost" size="sm">
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
