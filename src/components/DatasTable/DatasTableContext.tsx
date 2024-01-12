import { createContext } from "react"
import { reducerDispatchType } from "./hooks/useTableManager"
import { TableModel } from "./models/TableModel"
import { ITableState } from "./interfaces/ITableState"
import { IPreset } from "./interfaces/IPreset"

const initialContext : IDatasTableContext = {}

export const DatasTableContext = createContext<IDatasTableContext>(initialContext)

export interface IDatasTableContext{
    tableModel? : TableModel
    dispatch? : reducerDispatchType
    tableState? : ITableState
    preset? : IPreset
}