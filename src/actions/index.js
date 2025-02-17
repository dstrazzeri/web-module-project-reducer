export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CURRENT_MEMORY = "CURRENT_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = number => {
    return({type:APPLY_NUMBER, payload:number});
}

export const applyOperation = opr => {
    return({type:CHANGE_OPERATION, payload: opr})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const addMemory = total => {
    return({type: ADD_MEMORY, payload: total})
}

export const currentMemory = mem => {
    return({type:CURRENT_MEMORY, payload: mem})
}

export const clearMemory = () => {
    return({type: CLEAR_MEMORY})
}
