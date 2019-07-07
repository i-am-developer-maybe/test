import {
  SET_OPEN_IMAGE_GALLERY,
  CLEAR_OPEN_IMAGE_GALLERY
} from '$store/constants/gallery';

const stateImageDefault = '';

const openImageGallery = (state = stateImageDefault, { type, payload }) => {
  switch (type) {
    case SET_OPEN_IMAGE_GALLERY:
      return payload.uri;

    case CLEAR_OPEN_IMAGE_GALLERY:
      return stateImageDefault;

    default:
      return state;
  }
};

export default openImageGallery;
