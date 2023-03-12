import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/templates";
import { JournalsPage } from "./journals";
import { AnalyticsPage } from "./analytics";
import { ArticlesPage } from "./articles";
import { ConferencesPage } from "./conferences";
import { SeminarsPage } from "./seminars";
import { SettingsPage } from "./settings";
import { JournalCreatePage } from "./journal-create";
import { LoginPage } from "./login";

export const Routing = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<AnalyticsPage />} />
			</Routes>
			<Routes>
				<Route path="/journals" element={<JournalsPage />} />
			</Routes>
			<Routes>
				<Route path="/journals/create" element={<JournalCreatePage />} />
			</Routes>
			<Routes>
				<Route path="/articles" element={<ArticlesPage />} />
			</Routes>
			<Routes>
				<Route path="/conferences" element={<ConferencesPage />} />
			</Routes>
			<Routes>
				<Route path="/seminars" element={<SeminarsPage />} />
			</Routes>
			<Routes>
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};
