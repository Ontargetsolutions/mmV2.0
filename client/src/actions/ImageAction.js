import {SAVE_IMAGE, SAVE_IMAGE_SUCCESS, SAVE_IMAGE_FAILURE} from './types';

/**
 * Redux Action to save image
 */
export const saveImage = image => ({
  type: SAVE_IMAGE,
  payload: image,
});

/**
     * Redux Action to save image success
     */
export const saveImageSuccess = () => ({
  type: SAVE_IMAGE_SUCCESS,
});

/**
     * Redux Action to save image failure
     */
export const saveImageFailure = error => ({
  type: SAVE_IMAGE_FAILURE,
  payload: error,
});
