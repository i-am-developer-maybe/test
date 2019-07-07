import { LOAD_IMAGES } from '$store/constants/gallery';

const stateCardDefault = [];

const data = (state = stateCardDefault, { type, payload }) => {
  switch (type) {
    case LOAD_IMAGES:
      return payload.data;

    default:
      return state;
  }
};

export default data;
