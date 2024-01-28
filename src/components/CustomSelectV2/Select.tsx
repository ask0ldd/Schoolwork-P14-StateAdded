/* eslint-disable react-hooks/exhaustive-deps */
import './style/Select.css'
import SelectComboBox from "./ComboBox"
import OptionsList from "./OptionsList"
import {useState, useRef, useEffect} from 'react'
import { useKeyboardHandler } from './hooks/useKeyboardHandler'
import { SelectContext } from './contexts/SelectContext'
import { ISelectPreset } from './presets/ISelectPreset'
// import { DatasTableContext } from '../DatasTableContext'

/**
 * Component : A dropdown menu mimicking the HTML select component, with visual customization options.
 * @Component
 * @param {Object} props - Props.
 * @param {Object} props.options
 * @param {string} props.options[].label - Text displayed as an option.
 * @param {string} props.options[].value - Value sent on form submit when this option is selected.
 * @param {string} props.selectId - Id of the select, only used for options naming purposes.
 * @param {function} props.onValueChange - Function triggered when selecting a new option.
 * @return ( <CustomSelect formGroupState={formGroupState} options={options} selectId={selectId} labelledBy={labelledBy} onValueChange={onValueChange}/> )
 */
function Select({ options, selectId, defaultOption, _onOptionChangeCallback, preset } : IProps){ // should be able to pass the id of the element labelling the select

    // const options = options // || [ {label : '10', value : '10'}, {label : '25', value : '25'}, {label : '50', value : '50'}, {label : '100', value : '100'}]

    // const {dispatch} = useContext(DatasTableContext)

    const activeOptionRef = useRef<IOption>({...options[0]})
    function setActiveOption(option : IOption){
        activeOptionRef.current = {...option}
        if(_onOptionChangeCallback == null) return
        _onOptionChangeCallback(option)
    }

    // register nRowsDefault
    useEffect(() => {
        if(defaultOption == null) return
        const _defaultOption = options.find(option => parseInt(option.value) === defaultOption)
        if(_defaultOption != null ) setActiveOption(_defaultOption)
    }, [defaultOption])

    const [isListboxExpanded, _setListboxAsExpanded] = useState<boolean>(false)
    const isListboxExpandedRef = useRef<boolean>(isListboxExpanded)
    function setListboxAsExpanded(bool : boolean){
        _setListboxAsExpanded(bool)
        isListboxExpandedRef.current = bool
    }

    useKeyboardHandler(
        selectId,
        [...options], 
        activeOptionRef, 
        isListboxExpandedRef, 
        setActiveOption, 
        setListboxAsExpanded
    )
   
    return(
        <div className="selectContainer">
            <SelectContext.Provider value={{
                selectId, options, activeOption : {get :  () => activeOptionRef.current, set : setActiveOption}, 
                listbox : { isExpanded : isListboxExpanded, setAsExpanded : setListboxAsExpanded},
                preset : preset
            }}>
                <SelectComboBox/>
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
    selectId : string
    defaultOption ?: number
    _onOptionChangeCallback ?: (activeOption : IOption) => unknown
    preset ?: ISelectPreset
}