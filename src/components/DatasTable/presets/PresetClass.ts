import { IPreset } from "../interfaces/IPreset";

class PresetClass {
    #preset : IPreset

    constructor(preset : IPreset){
        this.#preset = preset
    }

    #set(preset : IPreset){
        this.#preset = preset
    }
    
    get(){
        return this.#preset
    }

    setGlobalFont (font: string): PresetClass {
        this.#set({ ...this.#preset, global: { ...this.#preset.global, font: font } } as IPreset)
        return this
    }

    setBordersColors ({ _default, focus }: { _default: string; focus: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            selectEntriesPerPage: { ...this.#preset.selectEntriesPerPage, selectBorderColor: { default: _default, focus } },
            searchBar: { ...this.#preset.searchBar, inputBorderColor: { default: _default, focus } },
        } as IPreset)
        return this
    }

    setSeparatorColor (color: string): PresetClass {
        this.#set({ ...this.#preset, 
            firstnLastRowSeparatorsColor : color
        } as IPreset)
        return this
    }

    setTHStyle ({ textColor, background, arrowColor, activeArrowColor }: { textColor: string; background: string; arrowColor: string; activeArrowColor: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            th : {...this.#preset.th,
                textColor,
                backgroundColor : background,
                arrow : {activeColor : activeArrowColor, inactiveColor : arrowColor}
            }
        } as IPreset)
        return this
    }

    setHoveredElementsStyle ({ textColor, background }: { textColor: string; background: string; }): PresetClass {
        throw new Error("Function not implemented." + textColor + background);
    }

    setOddRowsStyle ({ background, separatorColor }: { background: string; separatorColor: string; }): PresetClass {
        this.#set({ ...this.#preset, 
            oddRow : {...this.#preset.oddRow,
                backgroundColor : {...this.#preset.oddRow.backgroundColor, default: background},
                bottomSeparatorColor : separatorColor,
            }
        } as IPreset)
        return this
    }

    setEvenRowsStyle ({ background, separatorColor }: { background: string; separatorColor: string;}): PresetClass {
        this.#set({ ...this.#preset, 
            evenRow : {...this.#preset.evenRow,
                backgroundColor : {...this.#preset.evenRow.backgroundColor, default: background},
                bottomSeparatorColor : separatorColor,
            }
        } as IPreset)
        return this
    }

}

export default PresetClass