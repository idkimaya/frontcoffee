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

export function TopSelect() {
  return (
    <Select>
        <Label>Choisi ton topping</Label>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Fraise">Fraise</SelectItem>
          <SelectItem value="Granola">Granola</SelectItem>
          <SelectItem value="Oreo">Oreo</SelectItem>
          <SelectItem value="Noisette crumbs">Noisette crumbs</SelectItem>
          <SelectItem value="Pépites de chocolat noir">Pépites de chocolat noir</SelectItem>
          <SelectItem value="Pépites de chocolat blanc">Pépites de chocolat blanc</SelectItem>
          <SelectItem value="Daims">Daims</SelectItem>
          <SelectItem value="Coulis de Caramel">Coulis de Caramel</SelectItem>
          <SelectItem value="Crème fouté">Crème fouté</SelectItem>
          <SelectItem value="foam">Foam</SelectItem>
          <SelectItem value="Brown sugar foam">Brown sugar foam</SelectItem>
          <SelectItem value="Coco flakes">Coco flakes</SelectItem>
          <SelectItem value="m&m">m&m</SelectItem>
          <SelectItem value="Coulis Chocolat">Coulis Chocolat</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


