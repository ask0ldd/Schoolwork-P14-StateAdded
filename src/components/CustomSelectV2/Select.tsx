/* eslint-disable react-hooks/exhaustive-deps */
import './style/Select.css'
import ComboBox from "./ComboBox"
import OptionsList from "./OptionsList"
import {useState, useRef, useEffect} from 'react'
import { useKeyboardHandler } from './hooks/useKeyboardHandler'
import { SelectContext } from './contexts/SelectContext'
import { ISelectPreset } from './presets/ISelectPreset'
import { basePreset } from './presets/basePreset'
// import { DatasTableContext } from '../DatasTableContext'

/**
 * Component : A dropdown menu mimicking the HTML select component, with visual customization options.
 * @Component
 * @param {Object} props - Props.
 * @param {Object} props.options
 * @param {string} props.options[].label - Text displayed as an option.
 * @param {string} props.options[].value - Value sent on form submit when this option is selected.
 * @param {string} props.id - Id of the select, only used for options naming purposes.
 * @param {string} props.labelledBy - id of the label associated with this select.
 * @param {function} props.onValueChange - Function triggered when selecting a new option.
 * @return ( <Select formGroupState={formGroupState} options={options} selectId={selectId} labelledBy={labelledBy} onValueChange={onValueChange}/> )
 */
function Select({ options, id, labelledBy, defaultOption, onValueChange, preset } : IProps){ // should be able to pass the id of the element labelling the select

    // !!! should verify no duplicates in options

    const activeOptionRef = useRef<IOption>({...options[0]}) // should be default options
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_activeOption, _setActiveOption] = useState({...options[0]}) // should be default options
    
    function setActiveOption(option : IOption, onValueChangeCall = true){
        activeOptionRef.current = {...option}
        _setActiveOption({...option})
        if(onValueChange == null || !onValueChangeCall) return
        onValueChange(option)
    }

    // register defaultOption
    useEffect(() => {
        if(defaultOption == null) return
        const _defaultOption = options.find(option => option.value == defaultOption)
        if(_defaultOption != null ) setActiveOption(_defaultOption, false)
    }, [defaultOption])

    const [isListboxExpanded, _setListboxAsExpanded] = useState<boolean>(false)
    const isListboxExpandedRef = useRef<boolean>(isListboxExpanded)
    function setListboxAsExpanded(bool : boolean){
        _setListboxAsExpanded(bool)
        isListboxExpandedRef.current = bool
    }

    useKeyboardHandler(
        id,
        [...options], 
        activeOptionRef, 
        isListboxExpandedRef, 
        setActiveOption, 
        setListboxAsExpanded
    )
   
    return(
        <div className="selectContainer">
            <SelectContext.Provider value={{
                id, labelledBy : labelledBy || '', options, activeOption : {get :  () => activeOptionRef.current, set : setActiveOption}, 
                listbox : { isExpanded : isListboxExpanded, setAsExpanded : setListboxAsExpanded},
                preset : preset || basePreset.get()
            }}>
                <ComboBox/>
                <OptionsList/>
            </SelectContext.Provider>
        </div>
    )

}

export default Select

export interface IOption{
    label : string
    value : string
}

interface IProps{
    options : Array<IOption>
    id : string
    labelledBy ?: string
    defaultOption ?: string
    onValueChange ?: (activeOption : IOption) => unknown
    preset ?: ISelectPreset
}