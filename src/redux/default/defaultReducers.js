import { SET_NAME_MODULE } from "./defaultTypes";
import { SET_NAME_LESSON } from "./defaultTypes";

const initialState = {
    name : "Desarrollo Frontend con React",
    nameModule: "",
    nameLesson: "",
};

const defaultReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_MODULE:
            return {
                ...state,
                nameModule: action.payload,
            };
        case SET_NAME_LESSON:
            return {
                ...state,
                nameLesson: action.payload,
            };
        default:
            return state;
    }
};

export default defaultReducers;