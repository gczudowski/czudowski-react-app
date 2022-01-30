import type { Dispatch } from 'react';
import type { AnyAction } from 'redux';

export const SET_DARK_MODE: string = 'SET_DARK_MODE';

const createSetDarkModeAction = (payload: boolean): AnyAction => ({
  type: SET_DARK_MODE,
  payload,
});

export const setDarkMode = (isDarkMode: boolean) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(createSetDarkModeAction(isDarkMode));
    } catch (error) {
      console.error(error);
    }
  };
};
