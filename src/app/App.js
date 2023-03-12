import { Routing } from "../pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="w-full min-h-screen bg-[#F6F8F9] font-montserrat p-5">
			<Routing />
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				className="toaster"
			/>
		</div>
	);
}

export default App;
