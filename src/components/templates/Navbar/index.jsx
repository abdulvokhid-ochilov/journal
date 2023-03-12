import { HiOutlineLogout } from "react-icons/hi";
import { Button, Dropdown, Logo, SearchInput } from "../../atoms";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const [page, setPage] = useState();

	useEffect(() => {
		setPage(window.location.pathname);
	}, [window.location.pathname]);

	if (page === "/login") return <></>;

	return (
		<div className="bg-white p-5 ml-[2px] flex flex-row justify-between items-center rounded-3xl">
			<Logo />
			<div className="flex flex-row gap-5 items-center">
				<NavLink>Журналы</NavLink>
				<NavLink>Статья</NavLink>
				<NavLink>Авторы</NavLink>
				<NavLink>Организации</NavLink>
				<Dropdown values={["Пресс-служба", "Пресс-служба", "Пресс-служба"]} />
				<NavLink>Контакт</NavLink>
			</div>
			<div className="flex flex-row gap-5 items-center">
				<SearchInput any="bg-[#F5F5F7]" />
				<Dropdown values={["Русский", "English", "O'zbek"]} />
				<Button
					text="Выйти"
					any="border border-[#3C4BDC] rounded-xl text-[#3C4BDC]"
				>
					<HiOutlineLogout size={20} />
				</Button>
			</div>
		</div>
	);
};
