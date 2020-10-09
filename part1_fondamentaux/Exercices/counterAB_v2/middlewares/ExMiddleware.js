const ExMiddleware = store => next => action => {

  console.log('dispatching', action); // action avant qu'elle passe dans le reducer
  const result = next(action); // action est faite dans le reducer
  console.log('next action', store.getState());

  // Attention au boucle infini ...
  // store.dispatch({ type : 'MESSAGE'})

  return result;
}

export default ExMiddleware;