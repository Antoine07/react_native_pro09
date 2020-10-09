import { combineReducers } from 'redux';

import counterA from './counterA';
import counterB from './counterB';
import log from './log';

export default combineReducers({
    counterA ,
    counterB,
    log
});