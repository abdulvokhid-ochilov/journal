import { createSlice } from "@reduxjs/toolkit";

const journalSlice = createSlice({
	name: "journal",
	initialState: {
		user: {},
		token: null,
		journals: {},
		loginStatus: false,
	},

	reducers: {
		loginUser(state, action) {
			const { user, token } = action.payload;
			state.token = token;
			localStorage.setItem("journalsUserToken", token);
			state.user = user;
			state.loginStatus = true;
		},
		logoutUser(state, action) {
			state.user = {};
			state.loginStatus = false;
			state.token = null;
			state.journals = {};
			localStorage.removeItem("journalsUserToken");
		},
	},
});

export const journalActions = journalSlice.actions;

export default journalSlice;
