import { createContext } from "react";
import { IOption } from "../Select";
import { ISelectPreset } from "../presets/ISelectPreset";
import { basePreset } from "../presets/basePreset";

export const SelectContext = createContext<ISelectContext>({
    selectId : '',
    options : [],  
    activeOption : {get : () => ({label:'', value:''}), set : () => false},
    listbox : {isExpanded : false, setAsExpanded : () => false},
    preset : basePreset.get()
})

interface ISelectContext{
    selectId : string
    options : Array<IOption>
    activeOption : {
        get : () => IOption
        set : (option : IOption) => void
    }
    listbox : {
        isExpanded : boolean, 
        setAsExpanded : (bool : boolean) => void
    }
    preset : ISelectPreset
}

