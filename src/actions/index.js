export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const MEMORY_SET = "MEMORY_SET";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const TOTAL_SET = "TOTAL_SET"
export const MEMORY_RESET = "MEMORY_RESET"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const ChangeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const ClearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}
export const Memoryset = () => {
    return({type:MEMORY_SET})
}

export const Totalset = () => {
    return({type:TOTAL_SET})
}

export const MemoryReset = () => {
    return({type:MEMORY_RESET})
}

