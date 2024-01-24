import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label"

export function FlavorSelect() {
  return (
    <Select>
        <Label>Choisi ton gôut</Label>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Vanille">Vanille</SelectItem>
          <SelectItem value="Brown Sugar">Brown Sugar</SelectItem>
          <SelectItem value="Noisette Toffee">Noisette Toffee</SelectItem>
          <SelectItem value="Noisette">Noisette</SelectItem>
          <SelectItem value="Chocolat">Chocolat</SelectItem>
          <SelectItem value="White Chocolate">White Chocolate</SelectItem>
          <SelectItem value="Mocha">Mocha</SelectItem>
          <SelectItem value="Mocha">Matcha</SelectItem>
          <SelectItem value="Caramel">Caramel</SelectItem>
          <SelectItem value="Caramel sugar free">Caramel sugar free</SelectItem>
          <SelectItem value="Caramel beurre salé">Caramel beurre salé</SelectItem>
          <SelectItem value="Miel">Miel</SelectItem>
          <SelectItem value="Coco">Coco</SelectItem>
          <SelectItem value="Pumkin spice">Pumkin spice</SelectItem>
          <SelectItem value="Pain d'épice">Pain d'épice</SelectItem>
          <SelectItem value="Cinnamon Dolce">Cinnamon Dolce</SelectItem>
          <SelectItem value="Citron">Citron</SelectItem>
          <SelectItem value="Cerise">Cerise</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


