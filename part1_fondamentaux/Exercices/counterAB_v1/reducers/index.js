import { combineReducers } from 'redux';

import counterA from './counterA';
import counterB from './counterB';

export default combineReducers({
    counterA ,
    counterB 
});