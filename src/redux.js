import {
  // combineReducers,
  createStore,
} from 'redux';


//ACTIONS
export const updateBank = (game) => ({
  type: 'UPDATE_BANK',
  game                        // <-- action.type
});

export const updateUser = (value) => ({
  type: 'UPDATE_USER',
  value                        // <-- action.type
});


///REDUCERS
export const reducers = (state = initialState1, action) => {
  switch (action.type) {

    case 'UPDATE_BANK':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- UPDATE_BANK | state: ", state)
      console.log(" -- REDUCER -- UPDATE_BANK | action", action)
      console.log(" -- REDUCER -- UPDATE_BANK | action.game: ", action.game)

      id++;

      let newBank = state.gold;
      let result;

      switch (action.game) {
        case 'Farm':
          //do something
          result = Math.floor(Math.random() * 4) + 2;
          break;
        case 'Cave':
          //do something
          result = Math.floor(Math.random() * 5) + 6;
          break;
        case 'Casino':
          //do something
          let wl = Math.floor(Math.random() * 10)
          result = Math.floor(Math.random() * 100) + 1;
          if (wl === 1) {
            result *= 1;
          } else {
            result *= -1;
          }
          break;
        case 'House':
          //do something
          result = Math.floor(Math.random() * 8) + 8;
          break;
        case 'Bankruptcy':
          //do something
          newBank = 0;
          result = 0;
          break;
        default:
          //do nothing
          result = 0;
          break;
      }

      newBank += result;

      let lastAction = { id, user: state.user, game: action.game, change: result }

      return Object.assign(
        {},
        state,
        {
          logs: [
            ...state.logs,
            lastAction
          ],
          gold: newBank,
          user: state.user,
          lastAction: lastAction,
        }
      );

    case 'UPDATE_USER':

      return Object.assign({},
        state, { user: action.value });

    default:
      return state;
  }
}


// Initial State
// Minimal representation of the data in the app
let id = 0;
const initialState1 = {
  logs: [
  ],
  gold: 0,
  user: '',
  lastAction: null,
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
// export const reducers = combineReducers({
//     tasks
// });


// STORE -- store.js
export function configureStore(initialState = initialState1) { // initialState = initialState | {}
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  console.log(store);
  return store;
};


export const store = configureStore();
