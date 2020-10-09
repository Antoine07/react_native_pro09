import {
  INCREMENT_COUNTER_A,
  INCREMENT_COUNTER_A_OUT,
  INCREMENT_COUNTER_B,
  TIMER,
  STOP_INCREMENT_B,
} from '../constants/actions';

export const increment_pressOut = (payload) => {
  return { type: INCREMENT_COUNTER_A_OUT, payload };
};

export const increment_press = (payload) => {
  return { type: INCREMENT_COUNTER_A, payload };
};

export const increment_longPress = (payload) => {
  return { type: INCREMENT_COUNTER_A, payload };
};

export const increment_press_B = (payload) => {
  return { type: INCREMENT_COUNTER_B, payload };
};

// On doit utiliser un middleware pour faire de l'asynchrone dans Redux
// le reducer de Redux est sybchrone Thunk permettra de gérer ce qui est asynchrone dans Redux
let interval = null;

export const increment_press_B_async = (payload) => {
  return (dispatch) => {
    if (interval === null)
      interval = setInterval(() => {
        dispatch(increment_press_B(payload));
      }, TIMER);
  };
};

export const stop_increment_B = () => {
  clearInterval(interval);
  interval = null;

  return {
    type: STOP_INCREMENT_B,
  };
};
