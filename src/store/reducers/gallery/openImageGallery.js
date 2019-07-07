import { SET_OPEN_IMAGE_GALLERY } from '$store/constants/gallery';

const stateCardDefault = '';

const openImageGallery = (state = stateCardDefault, { type, payload }) => {
  switch (type) {
    case SET_OPEN_IMAGE_GALLERY:
      return payload.uri;

    default:
      return state;
  }
};

export default openImageGallery;
