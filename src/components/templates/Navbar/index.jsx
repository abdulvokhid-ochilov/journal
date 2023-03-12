import { HiOutlineLogout } from "react-icons/hi";
import { Button, Dropdown, Logo, SearchInput } from "../../atoms";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { journalActions } from "../../../store/journal-slice";

export const Navbar = () => {
	const status = useSelector((state) => state.journal.loginStatus);

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(journalActions.logoutUser());
	};

	if (!status) return <></>;

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
				<div onClick={logoutHandler}>
					<Button
						text="Выйти"
						any="border border-[#3C4BDC] rounded-xl text-[#3C4BDC]"
					>
						<HiOutlineLogout size={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};
