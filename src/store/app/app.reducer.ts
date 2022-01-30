import type { AnyAction } from 'redux';
import { SET_DARK_MODE } from './app.action';

const initialState = {
    isDarkMode: false,
}

export default function app(state: any = initialState, action: AnyAction): any {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
}
