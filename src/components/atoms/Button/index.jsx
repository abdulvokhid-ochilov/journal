import React from "react";

export const Button = ({ text, any, children }) => {
	return (
		<button
			className={`${any} rounded-md font-semibold text-base py-2 px-7 text-center flex flex-row items-center gap-3 justify-center`}
		>
			{text}
			{children}
		</button>
	);
};
