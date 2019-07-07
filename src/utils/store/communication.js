export const loadingAction = action => {
  return `${action}_LOADING`;
};

export const errAction = action => {
  return `${action}_FAIL`;
};

export const setLoadingTrue = state => {
  return {
    ...state,
    isLoading: true
  };
};

export const setLoadTrue = state => {
  return {
    ...state,
    isLoading: false,
    isLoad: true
  };
};

export const setLoadFail = (state, { message }) => {
  return {
    ...state,
    isLoading: false,
    isErrorLoad: true,
    error: { message }
  };
};
