/* eslint-disable react-hooks/exhaustive-deps */
import './style/Select.css'
import SelectComboBox from "./ComboBox"
import OptionsList from "./OptionsList"
import {useState, useRef, useContext} from 'react'
import { useKeyboardHandler } from './hooks/useKeyboardHandler'
import { SelectContext } from './contexts/SelectContext'
import { DatasTableContext } from '../DatasTableContext'

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
function Select({ options, selectId } : IProps){ // should be able to pass the id of the element labelling the select

    const NDisplayedOptions = options || [ {label : '10', value : '10'}, {label : '25', value : '25'}, {label : '50', value : '50'}, {label : '100', value : '100'}]
    const {dispatch} = useContext(DatasTableContext)

    // Updated state (always returning the non updated version) not accessible through event listeners => solution : tracking the state through a ref always updated simultaneously
    // https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
    // The listener belongs to the initial render and is not updated on subsequent rerenders
    const [activeOption, _setActiveOption] = useState<IOption>({...NDisplayedOptions[0]}) // deal with error if options missing
    const activeOptionRef = useRef<IOption>(activeOption)
    function setActiveOption(option : IOption){
        _setActiveOption({...option})
        activeOptionRef.current = {...option}
    }

    /**
     * Update the number of entries per page.
     * @param {React.ChangeEvent<HTMLSelectElement>} e - The event object.
     */
    function updateNumberEntriesPerPage(nEntries : number){
        const currentPage = 1
        const nEntriesPerPage = e.target.value != null ? parseInt(e.target.value) : 50
        dispatch && dispatch({type : "pagination", payload : {currentPage, nEntriesPerPage}})
    }

    const [isListboxExpanded, _setListboxAsExpanded] = useState<boolean>(false)
    const isListboxExpandedRef = useRef<boolean>(isListboxExpanded)
    function setListboxAsExpanded(bool : boolean){
        _setListboxAsExpanded(bool)
        isListboxExpandedRef.current = bool
    }

    useKeyboardHandler(
        selectId,
        /*formGroupState,*/
        [...NDisplayedOptions], 
        activeOptionRef, 
        isListboxExpandedRef, 
        setActiveOption, 
        setListboxAsExpanded
    )
   
    return(
        <div className="selectContainer">
            <SelectContext.Provider value={{
                selectId, options : NDisplayedOptions, activeOption : {get :  () => activeOption, set : setActiveOption}, 
                listbox : { isExpanded : isListboxExpanded, setAsExpanded : setListboxAsExpanded},
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
    options? : Array<IOption>
    selectId : string
}