import React, { useState } from "react";
import { Sidebar } from "../../components/templates";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FileUpload } from "../../components/molecules";
import { Button } from "../../components/atoms";

export const JournalCreatePage = () => {
	const [lang, setLang] = useState("ru");

	return (
		<div className="flex flex-row gap-6 mt-10 items-start">
			<Sidebar />
			<div className="flex-grow flex flex-col bg-[#ffffff] rounded-2xl">
				<div className="flex flex-row items-center justify-between p-6">
					<div className="flex flex-row">
						<p
							onClick={() => setLang("ru")}
							className={`${
								lang === "ru"
									? "text-[#3C4BDC] border-[#3C4BDC] border-b-2"
									: "text-[#353437] border-[#EBEBEB]"
							} border-b py-3 px-6 cursor-pointer`}
						>
							На русском
						</p>
						<p
							onClick={() => setLang("uz")}
							className={`${
								lang === "uz"
									? "text-[#3C4BDC] border-[#3C4BDC] border-b-2"
									: "text-[#353437] border-[#EBEBEB]"
							} border-b py-3 px-6 cursor-pointer`}
						>
							O‘zbek tili
						</p>
						<p
							onClick={() => setLang("eng")}
							className={`${
								lang === "eng"
									? "text-[#3C4BDC] border-[#3C4BDC] border-b-2"
									: "text-[#353437] border-[#EBEBEB]"
							} border-b py-3 px-6 cursor-pointer`}
						>
							In English
						</p>
					</div>
					<Link
						to="/journals"
						className="border border-[#F5F5F7] rounded-full p-2"
					>
						<IoCloseOutline size={20} />
					</Link>
				</div>
				<div className="px-6 pb-6 flex flex-col gap-3">
					<h1 className="text-[#010E38] font-bold">Добавить журналы</h1>
					<div className="flex flex-row gap-5">
						<FileUpload />
						<div className="flex-grow flex flex-col gap-5">
							<div className="flex flex-row gap-5">
								<input
									type="text"
									className="border border-[#EBEBEB] rounded-lg bg-[#F6F8F9] py-3 px-2 w-2/5"
									placeholder="Дата"
								/>
								<input
									type="text"
									className="border border-[#EBEBEB] rounded-lg bg-[#F6F8F9] py-3 px-2 w-3/5"
									placeholder="Ключевое слово"
								/>
							</div>
							<input
								type="text"
								className="border border-[#EBEBEB] rounded-lg bg-[#F6F8F9] py-3 px-2 w-full"
								placeholder="Название журнала"
							/>
							<textarea
								rows={5}
								className="border border-[#EBEBEB] rounded-lg bg-[#F6F8F9] py-3 px-2 w-full"
								placeholder="Описание"
							></textarea>
						</div>
					</div>
					<div className="flex flex-row justify-end">
						<Button text="Отменить" any="bg-[#F5F5F7]" />
						<Button text="Сохранить" any="bg-[#3C4BDC] text-[#ffffff]" />
					</div>
				</div>
			</div>
		</div>
	);
};
