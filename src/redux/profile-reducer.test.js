
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 23},
        {id: 3, message: 'My first post', likesCount: 23},
    ]

};


it('length postsData should be incremented', () => {
    let action = addPostActionCreator("NewTestTextBody");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4)

});


it('message of new post  should be NewTestTextBody', () => {
    let action = addPostActionCreator("NewTestTextBody");
    let newState = profileReducer(state, action);
    expect(newState.postsData[3].message).toBe("NewTestTextBody")
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2)
});


it(`after deleting length  shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3)
});