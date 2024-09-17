import { SET_DICTIONARY_DATA } from "./dictionaryTypes";
import { CLEAR_DICTIONARY_DATA } from "./dictionaryTypes";
import { REMOVE_PALABRA } from "./dictionaryTypes";
import { ADD_PALABRA } from "./dictionaryTypes";

export const setDictionaryData = (dictionaryData) => ({
    type: SET_DICTIONARY_DATA,
    payload: dictionaryData
});

export const clearDictionaryData = () => ({
    type: CLEAR_DICTIONARY_DATA,
});

export const removePalabra = (palabra) => ({
    type: REMOVE_PALABRA,
    payload: palabra
});

export const addPalabra = (palabra) => ({
    type: ADD_PALABRA,
    payload: palabra
});