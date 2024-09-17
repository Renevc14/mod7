import { SET_FORM_DATA } from "./formTypes";
import { CLEAR_FORM_DATA } from "./formTypes";

export const saveFormData = (formData) => ({
    type: SET_FORM_DATA,
    payload: formData
});

export const clearFormData = () => ({
    type: CLEAR_FORM_DATA,
})