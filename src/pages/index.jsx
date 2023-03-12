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
import Protected from "../utils/protected";

export const Routing = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Protected>
							<AnalyticsPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/journals"
					element={
						<Protected>
							<JournalsPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/journals/create"
					element={
						<Protected>
							<JournalCreatePage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/articles"
					element={
						<Protected>
							<ArticlesPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/conferences"
					element={
						<Protected>
							<ConferencesPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/seminars"
					element={
						<Protected>
							<SeminarsPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route
					path="/settings"
					element={
						<Protected>
							<SettingsPage />
						</Protected>
					}
				/>
			</Routes>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};
