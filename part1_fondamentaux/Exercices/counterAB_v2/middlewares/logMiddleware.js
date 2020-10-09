import { INCREMENT_COUNTER_A, INCREMENT_COUNTER_B } from '../constants/actions';

import { add_log_counter_A, add_log_counter_B } from '../actions/actions-types';

const log = (store) => (next) => (action) => {
  //console.log('dispatching', action); // action avant qu'elle passe dans le reducer

  // on a cliqué sur le counterA
  if (action.type === INCREMENT_COUNTER_A) {
    store.dispatch(add_log_counter_A());
  }

  if (action.type === INCREMENT_COUNTER_B) {
    const { counterB: { status } } = store.getState();
    if (status === false)
      store.dispatch(add_log_counter_B());
  }

  const result = next(action); // action est faite dans le reducer
  // console.log('LOG COUNTER A B', log );

  return result;
};

export default log;
