import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineBarChart, AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineBookOpen, HiOutlineLogout } from "react-icons/hi";
import { RiBook2Line } from "react-icons/ri";
import { TbArticle } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export const Sidebar = () => {
	return (
		<div className="bg-white p-10 rounded-2xl flex flex-col gap-10">
			<NavLink to="/">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<AiOutlineBarChart />
						Аналитика
					</span>
				)}
			</NavLink>
			<NavLink to="/journals">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<HiOutlineBookOpen />
						Журналы
					</span>
				)}
			</NavLink>
			<NavLink to="/articles">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<RiBook2Line />
						Статьи
					</span>
				)}
			</NavLink>
			<NavLink to="/conferences">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<AiOutlineLaptop />
						Конференции
					</span>
				)}
			</NavLink>
			<NavLink to="/seminars">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<TbArticle />
						Семинары
					</span>
				)}
			</NavLink>
			<NavLink to="/settings">
				{({ isActive, isPending }) => (
					<span
						className={`flex flex-row items-center gap-2 ${
							isActive ? "text-[#3C4BDC]" : "text-[#5D5D5F]"
						}`}
					>
						<IoSettingsOutline />
						Настройки
					</span>
				)}
			</NavLink>
			<div className="flex flex-row items-center gap-1 border-t py-4 my-16 cursor-pointer">
				<HiOutlineLogout size={20} />
				Выйти
			</div>
		</div>
	);
};
