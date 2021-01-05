import { ADD_POST } from './types';

export const createPost = (title) => ({
  type: ADD_POST,
  payload: title
});
