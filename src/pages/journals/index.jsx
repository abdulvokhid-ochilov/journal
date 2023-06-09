import React, { useEffect } from "react";
import { Sidebar } from "../../components/templates";
import { Button, SearchInput } from "../../components/atoms";
import { FiPlus } from "react-icons/fi";
import { JournalCard } from "../../components/molecules";
import { Link } from "react-router-dom";
import { fetchJournals } from "../../store/journal-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const JournalsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.journal.token);

	useEffect(() => {
		dispatch(fetchJournals(token, navigate));
	}, []);

	return (
		<div className="flex flex-row gap-6 mt-10 items-start">
			<Sidebar />
			<div className="flex-grow flex flex-col">
				<div className="flex flex-row items-center justify-between">
					<h1 className="font-semibold text-[#020105] text-4xl">Журналы</h1>
					<div className="flex flex-row gap-6">
						<SearchInput any="bg-[#FFFFFF]" />
						<Link to="./create" className="flex flex-row">
							<Button text="Добавить" any="bg-[#3C4BDC] text-white">
								<FiPlus />
							</Button>
						</Link>
					</div>
				</div>
				<div className="flex-grow flex flex-row flex-wrap py-6 justify-between gap-4">
					<JournalCard />
					<JournalCard />
					<JournalCard />
					<JournalCard />
					<JournalCard />
					<JournalCard />
				</div>
			</div>
		</div>
	);
};
