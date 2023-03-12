import React from "react";
import logo from "../../../assets/img/logo.svg";

export const Logo = () => {
	return (
		<div className="flex flex-row items-center gap-4">
			<img src={logo} alt="logo" />
			<div className="font-bold text-lg">Journal</div>
		</div>
	);
};
