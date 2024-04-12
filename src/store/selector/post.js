// from PostReducer.js
export const selectPosts = (state) => state.post.posts;
export const selectTitle = (state) => state.post.title;
export const selectContent = (state) => state.post.content;
export const selectError = (state) => state.post.errmsg;