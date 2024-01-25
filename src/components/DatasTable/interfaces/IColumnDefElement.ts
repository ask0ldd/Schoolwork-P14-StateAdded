import { ReactNode } from "react"

export interface IColumnDefElement 
{
  th : string | null
  accessor : string | null
  sortable : boolean
  datatype : 'string' | 'number' | 'date' | 'custom_component' | null
  component? : ReactNode | null
}