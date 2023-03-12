import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchInput = ({ any }) => {
	return (
		<div className={`rounded-md ${any} px-6 py-4 flex flex-row gap-3`}>
			<FiSearch stroke="#9A999B" size={20} />
			<input
				type="text"
				placeholder="Поиск"
				className={`${any} focus:outline-none`}
			/>
		</div>
	);
};
