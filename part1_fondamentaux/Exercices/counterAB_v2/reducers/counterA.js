import {
    INCREMENT_COUNTER_A,
    INCREMENT_COUNTER_A_OUT
} from "../constants/actions";

const stateInit = {
    count : 0,
    intensity : 1,
    step : 1,
    countout : 0
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case INCREMENT_COUNTER_A:

            return {
                ...state,
                count : state.count + parseInt( action.payload.step * state.step )
            }

        case INCREMENT_COUNTER_A_OUT :

          return {
            ...state,
            countout : state.countout + parseInt( action.payload.step * state.step )
          }

        default:
            return state;
    }
};