import { ISelectPreset  } from "./ISelectPreset";

class SelectPresetClass {
    #preset : ISelectPreset 

    constructor(preset : ISelectPreset ){
        this.#preset = preset
    }
   
    /**
     * @returns {ISelectPreset } The preset object
     */
    get() : ISelectPreset {
        return this.#preset
    }

}

export default SelectPresetClass