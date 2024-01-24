import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function MilkSelect() {
  return (
    <Select> <Label>Choisi ton lait</Label>
      <SelectTrigger className="w-[180px]">
       <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Vache">Vache</SelectItem>
          <SelectItem value="Avoine">Avoine</SelectItem>
          <SelectItem value="Soja">Soja</SelectItem>
          <SelectItem value="Amande">Amande</SelectItem>
          <SelectItem value="Coco">Coco</SelectItem>
          <SelectItem value="Riz">Riz</SelectItem>
          <SelectItem value="Épautre">Épautre</SelectItem>
          <SelectItem value="Noisette">Noisette</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
