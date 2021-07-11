const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (store, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: store.newPostText,
                likesCount: 0
            };
            store.postsData.push(newPost);
            store.newPostText = '';
            return store;
        case UPDATE_NEW_POST_TEXT:
            store.newPostText = action.newText;
            return store;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;


