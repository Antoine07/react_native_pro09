import { INCREMENT_COUNTER_B, STOP_INCREMENT_B } from '../constants/actions';

const stateInit = {
  count: 0,
  intensity: 1,
  step: 1,
  countout: 0,
  status: false,
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNTER_B:
      return {
        ...state,
        count: state.count + parseInt(action.payload.step * state.step),
        status: true,
      };

    case STOP_INCREMENT_B:
      return {
        ...state,
        count: 0,
        status: false,
      };

    default:
      return state;
  }
};
