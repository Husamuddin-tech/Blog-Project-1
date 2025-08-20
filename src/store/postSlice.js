import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts: [],     // All posts from everyone
    userPosts: [],    // Only the logged-in user's posts
    selectedPost: null // Single post being viewed/edited
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload.allPosts;
        },
        setUserPosts: (state, action) => {
            state.userPosts = action.payload.userPosts;
        },
        addPost: (state, action) => {
            state.allPosts.push(action.payload.post);
            state.userPosts.push(action.payload.post);
        },
        updatePost: (state, action) => {
            const { id, updatedPost } = action.payload;
            // Update in allPosts
            const allIndex = state.allPosts.findIndex(post => post.id === id);
            if (allIndex !== -1) {
                state.allPosts[allIndex] = { ...state.allPosts[allIndex], ...updatedPost };
            }
            // Update in userPosts
            const userIndex = state.userPosts.findIndex(post => post.id === id);
            if (userIndex !== -1) {
                state.userPosts[userIndex] = { ...state.userPosts[userIndex], ...updatedPost };
            }
        },
        deletePost: (state, action) => {
            const postId = action.payload.id;
            state.allPosts = state.allPosts.filter(post => post.id !== postId);
            state.userPosts = state.userPosts.filter(post => post.id !== postId);
            if (state.selectedPost?.id === postId) {
                state.selectedPost = null;
            }
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload.post;
        },
        clearSelectedPost: (state) => {
            state.selectedPost = null;
        },
        clearPosts: (state) => {
            state.allPosts = [];
            state.userPosts = [];
            state.selectedPost = null;
        }
    }
});

export const { 
    setAllPosts, 
    setUserPosts, 
    addPost, 
    updatePost, 
    deletePost, 
    setSelectedPost, 
    clearSelectedPost, 
    clearPosts 
} = postSlice.actions;

export default postSlice.reducer;
