import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const initialState = {
  account: {
    balance: 1000,
  },
};
const enhancer = devToolsEnhancer();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposite':
      return {
        account: {
          balance: state.account.balance + action.payload,
        },
      };
    case 'account/withdraw':
      return {
        account: {
          balance: state.account.balance - action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, enhancer);

//фабрики екшенів
export const deposite = value => {
  return {
    type: 'account/deposite',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};
