import cartSlice from "./reducers/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({
    reducer: {
        todo: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})
export default store