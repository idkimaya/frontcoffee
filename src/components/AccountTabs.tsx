import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from '@radix-ui/react-label';
import { Link } from 'lucide-react';
import { Card, Button } from 'native-base';
import { CardHeader, CardTitle, CardDescription, CardContent, } from './ui/card';
import { Input } from './ui/input';
import TabsAcc from './TabsAcc';
import { DataTable } from './Tabs/data-table';
import { columns } from './Tabs/columns';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }



export default function AccountTabs() {
    // const data = await getData()
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="datagrid">All of your coffees here</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div>
             <TabsAcc/>
          </div>
        </TabsContent>
        <TabsContent value="datagrid">
            <div>
            <DataTable columns={columns} data={[]} />
        </div>
        </TabsContent>
        
      </Tabs>
    </div>
  );
}
