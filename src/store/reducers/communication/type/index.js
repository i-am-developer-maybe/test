import {
  loadingAction,
  errAction,
  setLoadingTrue,
  setLoadTrue,
  setLoadFail
} from '$utils/store/communication';

const defaultState = {
  isLoading: false,
  isLoad: false,
  isErrorLoad: false,
  error: { message: '', name: '' }
};

export const defaultRerducerComunication = action => (
  state = defaultState,
  { type, payload }
) => {
  switch (type) {
    case loadingAction(action):
      return setLoadingTrue(state);

    case action:
      return setLoadTrue(state);

    case errAction(state):
      return setLoadFail(state, payload);

    default:
      return state;
  }
};
