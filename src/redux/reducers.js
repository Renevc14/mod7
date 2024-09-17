import { combineReducers } from 'redux';
import defaultReducers from './default/defaultReducers';
import productReducers from './products/productReducers';
import formReducer from './form/formReducer';
import dictionaryReducer from './dictionary/dictionaryReducers';


const reducers = combineReducers({
    default: defaultReducers,
    products: productReducers,
    form: formReducer,
    dictionary: dictionaryReducer
});

export default reducers;