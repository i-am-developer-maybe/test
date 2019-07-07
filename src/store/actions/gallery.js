import { loadingAction, errAction } from '$utils/store/communication';
import { handlerError } from './error';
import { LOAD_IMAGES, SET_OPEN_IMAGE_GALLERY } from '$store/constants/gallery';
const url = `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`;

export const getImages = () => {
  return async dispatch => {
    dispatch({ type: loadingAction(LOAD_IMAGES) });

    const response = await fetch(url, { method: 'GET' }).catch(e => {
      dispatch({ type: errAction(LOAD_IMAGES) });
      handlerError(e);
    });

    const data = await response.json();

    return dispatch({
      type: LOAD_IMAGES,
      payload: { data }
    });
  };
};

export const setOpenImageGallery = uri => {
  return {
    type: SET_OPEN_IMAGE_GALLERY,
    payload: { uri }
  };
};
