import React, { useState } from "react";
import journal from "../../../assets/img/journal.svg";
import eye from "../../../assets/img/eye.svg";
import download from "../../../assets/img/Downlaod.svg";
import calendar from "../../../assets/img/Calendar.svg";
import del from "../../../assets/img/Delete.svg";
import edit from "../../../assets/img/edit.svg";
import { DeleteModal } from "../DeleteModal";
export const JournalCard = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex flex-row items-start gap-4 bg-[#ffffff] p-4 rounded-2xl max-w-[565px]">
				<img src={journal} alt="journal" className="rounded-lg min-h-full" />

				<div className="flex flex-col gap-4">
					<div className="max-w-sm">
						<span className="text-sm text-[#5D5D5F] font-normal">001</span>
						<h2 className="text-[#020105] font-semibold">
							Ўзбекистон Фанлар Академияси, У.А. Арифов номидаги Ион-плазма ва
							лазер технологиялари институти
						</h2>
					</div>
					<div className="flex flex-row flex-wrap gap-2 items-center">
						<span>Ключевое слово:</span>
						<span className="text-sm text-[#5D5D5F]">Физика/Узбекистан</span>
					</div>
					<div className="flex flex-row justify-between">
						<span className="flex flex-row items-center justify-between gap-2 text-sm text-[#5D5D5F]">
							<img src={calendar} alt="icon" />
							12.12.2022
						</span>
						<span className="flex flex-row items-center justify-between gap-2 text-sm text-[#5D5D5F]">
							<img src={download} alt="icon" />
							200 000
						</span>
						<span className="flex flex-row items-center justify-between gap-2 text-sm text-[#5D5D5F]">
							<img src={eye} alt="icon" />
							200 000
						</span>
					</div>
				</div>
				<div className="flex flex-row gap-3">
					<div className="rounded-full bg-[#EEEFFF] w-fit p-2 cursor-pointer">
						<img src={edit} alt="icon" />
					</div>
					<div
						className="rounded-full bg-[#FFEFEF] w-fit p-2 cursor-pointer"
						onClick={() => setOpen(!open)}
					>
						<img src={del} alt="icon" />
					</div>
				</div>
			</div>
			<DeleteModal open={open} setOpen={setOpen} />
		</>
	);
};
