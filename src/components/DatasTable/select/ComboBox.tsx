import {useContext} from 'react'
import './style/ComboBox.css'
import { SelectContext } from './contexts/SelectContext'

/**
 * Component : The field containing the active option of the custom select.
 * @Component
 * @return ( <SelectComboBox/> )
 */
function SelectComboBox(){

    const { selectId, activeOption, listbox } = useContext(SelectContext)

    return(
        <span onBlur={() => {listbox.setAsExpanded(false)}} 
        onMouseDown={() => {listbox.setAsExpanded(!listbox.isExpanded)}} 
        tabIndex={0} aria-controls="customListbox" id={selectId + "SelectLabel"} role="combobox" 
        aria-haspopup="listbox" aria-activedescendant={activeOption.get().value}
        aria-expanded={listbox.isExpanded} className={listbox.isExpanded ? "customSelectLabel customSelectLabel-active" : "customSelectLabel"}
        >
            {activeOption.get().label}
            <img alt="dropdown arrow" className={listbox.isExpanded ? "customSelectOpen" : "customSelectArrow"} src="./icons/select-arrow.svg"/>
        </span>
    )
}

export default SelectComboBox