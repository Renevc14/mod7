import { REMOVE_PALABRA, SET_DICTIONARY_DATA, ADD_PALABRA} from "./dictionaryTypes";
import { CLEAR_DICTIONARY_DATA } from "./dictionaryTypes";

const initialState = {
    formData : {
        palabras: [
            { espanol: 'mono', ingles: 'monkey', portugues: 'macaco' },
            { espanol: 'casa', ingles: 'house', portugues: 'cucha' }
        ]
    },
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DICTIONARY_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                },
            };
        case ADD_PALABRA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    palabras: [...state.formData.palabras, action.payload]
                },
            }
        case CLEAR_DICTIONARY_DATA:
            return {
                ...state,
                formData: {
                    palabras: []
                },
            };
        case REMOVE_PALABRA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    palabras: state.formData.palabras.filter(palabra =>
                        !palabra.espanol.includes(action.payload) &&
                        !palabra.ingles.includes(action.payload) &&
                        !palabra.portugues.includes(action.payload)
                    )
                },
            };
        default:
            return state;
    }
};

export default dictionaryReducer;