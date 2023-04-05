import { PostData } from "@/public/Fakedata";
import { createSlice } from "@reduxjs/toolkit"

console.log(PostData);
export const postSlice = createSlice({
    name: 'posts',
    initialState: { posts: PostData },
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload.id);
        },
        updateTitle: (state, action) => {
            state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title
                }
            })
        },
    }
})



// export const getStaticProps = async () => {
//     const data = await axios.get('https://jsonplaceholder.typicode.com/posts');

//     return {
//         props: {
//             posts: data.data,
//         },
//     };
// };

export const { addPost, deletePost, updateTitle } = postSlice.actions;
export default postSlice.reducer;