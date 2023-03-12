import { configureStore } from "@reduxjs/toolkit";

import journalSlice from "./journal-slice";

const store = configureStore({
	reducer: {
		journal: journalSlice.reducer,
	},
});

export default store;
