import { ADD_LOG_COUNTER_A, ADD_LOG_COUNTER_B } from '../constants/actions';

const stateInit = {
  statistic: new Map([ ['counterA' , 0], ['counterB', 0]]),
  count: 0, 
};

export default (state = stateInit, action = {}) => {

  let counterA, counterB, statistic;

  switch (action.type) {
    case ADD_LOG_COUNTER_A:
      // on destructure le Map => un tableau => utilisez un new Map pour re-créer un Map
      statistic = new Map ([ ...state.statistic ]);

      counterA = statistic.get('counterA') ;
      counterA += 1;

      statistic.set('counterA', counterA )

      return {
        ...state,
        count: state.count + 1,
        statistic
      };

    case ADD_LOG_COUNTER_B:
      // on destructure le Map => un tableau => utilisez un new Map pour re-créer un Map
      statistic = new Map ([ ...state.statistic ]);

      counterB = statistic.get('counterB') ;
      counterB += 1;

      statistic.set('counterB', counterB )

      return {
        ...state,
        count: state.count + 1,
        statistic
      };

    default:
      return state;
  }
};
