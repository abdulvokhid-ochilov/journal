import React, { useRef } from "react";
import { Button, Logo } from "../../components/atoms";
import { HiOutlineLogin } from "react-icons/hi";
import { loginUser } from "../../store/journal-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const email = useRef();
	const password = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginHandler = (e) => {
		e.preventDefault();

		dispatch(
			loginUser(
				{
					email: email.current.value,
					password: password.current.value,
				},
				navigate
			)
		);
	};
	return (
		<div className="absolute bg-[#000000A3] top-0 left-0 flex flex-row w-full h-full ">
			<div className="flex flex-col w-1/3  rounded-r-2xl bg-white p-10">
				<Logo />
				<h1 className="font-bold text-4xl mt-24 mb-5">С возвращением</h1>
				<p className="#353437">
					Пожалуйста, введите свои регистрационные данные ниже
				</p>
				<form onSubmit={loginHandler} className="flex flex-col gap-5 mt-10">
					<div className="p-3 bg-[#F6F8F9] rounded-lg flex flex-col">
						<label
							htmlFor="email"
							className="block mb-2 text-xs font-medium text-[#9A999B]"
						>
							Email address
						</label>
						<input
							ref={email}
							type="email"
							id="email"
							className="bg-[#F6F8F9] focus:outline-none"
							placeholder="john.doe@company.com"
							required
						/>
					</div>
					<div className="p-3 bg-[#F6F8F9] rounded-lg flex flex-col">
						<label
							htmlFor="password"
							className="block mb-2 text-xs font-medium text-[#9A999B]"
						>
							Password
						</label>
						<input
							ref={password}
							type="password"
							id="password"
							className="bg-[#F6F8F9] focus:outline-none"
							placeholder="•••••••••"
							required
						/>
					</div>

					<Button text="Войти" any="text-[#fff] bg-[#3C4BDC]">
						<HiOutlineLogin size={20} />
					</Button>
				</form>
			</div>
		</div>
	);
};
