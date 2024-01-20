import {useContext, useState} from 'react'
import './style/ComboBox.css'
import { SelectContext } from './contexts/SelectContext'
import { DatasTableContext } from '../DatasTableContext'

/**
 * Component : The field containing the active option of the custom select.
 * @Component
 * @return ( <SelectComboBox/> )
 */
function SelectComboBox(){

    const [comboboxFocus, setComboboxFocus] = useState(false)

    const {preset} = useContext(DatasTableContext)

    const { selectId, activeOption, listbox } = useContext(SelectContext)

    const comboboxStyle = {
        background: preset.selectEntriesPerPage.selectBackgroundColor , 
        border: "1px solid "+ preset.selectEntriesPerPage.selectBorderColor,
        color: preset.selectEntriesPerPage.selectTextColor
    }
    const comboboxFocusStyle = {
        background: preset.selectEntriesPerPage.selectBackgroundColor, 
        outline: "1px solid "+ preset.selectEntriesPerPage.focusSelectBorderColor, 
        color: preset.selectEntriesPerPage.selectTextColor
    }

    return(
        <span style={comboboxFocus ? comboboxFocusStyle : comboboxStyle} 
            onFocus={()=> setComboboxFocus(true)} onBlur={() => {listbox.setAsExpanded(false); setComboboxFocus(false)}} 
            onMouseDown={() => {listbox.setAsExpanded(!listbox.isExpanded)}} 
            tabIndex={0} aria-controls="customListbox" id={selectId + "SelectLabel"} role="combobox" 
            aria-haspopup="listbox" aria-activedescendant={activeOption.get().value}
            aria-expanded={listbox.isExpanded} className={listbox.isExpanded ? "selectLabel selectLabel-active" : "selectLabel"}
        >
            {activeOption.get().label}
            <img alt="dropdown arrow" className={listbox.isExpanded ? "customSelectOpen" : "customSelectArrow"} src="./icons/select-arrow.svg"/>
        </span>
    )
}

export default SelectComboBox