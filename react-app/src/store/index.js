import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import portfolioReducer from './portfolio';
import assetReducer from './finnhub';
import candleReducer from './candles';
import chartReducer from './chart';

const rootReducer = combineReducers({
  session,
  portfolioState: portfolioReducer,
  assetState: assetReducer,
  candleState: candleReducer,
  chartState: chartReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
