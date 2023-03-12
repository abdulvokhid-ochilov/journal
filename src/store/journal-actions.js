import { journalActions } from "./journal-slice";
import { toast } from "react-toastify";

export const loginUser = (user, navigate) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(
				"https://dilmurod7007.pythonanywhere.com/api/auth/login/",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user),
				}
			);

			if (!response.ok) {
				throw new Error("Login failed.");
			}

			const data = await response.json();

			return data;
		};

		try {
			const userData = await toast.promise(sendRequest(), {
				pending: "Logging in ⚙️",
				success: "Logged in successfully🔑",
				error: "Please check your credentials⚠️",
			});
			console.log(userData);
			dispatch(
				journalActions.loginUser({
					user: userData.email,
					token: userData.token,
				})
			);

			navigate("/journals", { replace: true });
			console.log(userData);
		} catch (error) {
			console.log(error);
		}
	};
};
export const fetchJournals = (token, navigate) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			console.log(token);
			const response = await fetch(
				"https://dilmurod7007.pythonanywhere.com/api/journals/",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error("Fetching journals data failed.");
			}

			const data = await response.json();

			return data;
		};

		try {
			const data = await toast.promise(sendRequest(), {
				pending: "Fetching in ⚙️",
				success: "Fetched successfully🔑",
				error: "Error ⚠️",
			});

			console.log(data);

			// dispatch(
			// 	journalActions.loginUser({
			// 		user: data.data.user,
			// 		token: token,
			// 	})
			// );

			// navigate("/", { replace: true });
		} catch (error) {
			console.log(error);
		}
	};
};
