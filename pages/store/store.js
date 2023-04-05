import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";


// const conbinedReducer = combineReducers({
//     posts,
// });

const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postSlice,
        },
    });
}

export const store = makeStore();

// export const wrapper = createWrapper(makeStore);