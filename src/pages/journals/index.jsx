import React from "react";
import { Sidebar } from "../../components/templates";
import { Button, SearchInput } from "../../components/atoms";
import { FiPlus } from "react-icons/fi";

export const JournalsPage = () => {
	return (
		<div className="flex flex-row gap-6 mt-10 items-start">
			<Sidebar />
			<div className="flex-grow flex flex-col">
				<div className="flex flex-row items-center justify-between"></div>
				<h1 className="font-semibold text-[#020105] text-4xl w-fit">Журналы</h1>
				<div className="flex flex-row gap-6">
					<SearchInput any="bg-[#FFFFFF]" />
					<Button text="Добавить" any="bg-[#3C4BDC] text-white">
						<FiPlus />
					</Button>
				</div>
			</div>
		</div>
	);
};
