import React, { useState } from "react";
import download from "../../../assets/img/Download.svg";
import camera from "../../../assets/img/Camera.svg";

export const FileUpload = () => {
	const [img, setImg] = useState({ src: null, file: null });

	return (
		<div className="flex flex-col gap-4">
			<div className="w-[200px] h-[286px] bg-[#F6F8F9] rounded-lg flex flex-row items-center justify-center overflow-hidden">
				<img
					className="object-center object-contain"
					src={img.src ? img.src : camera}
					alt=""
				/>
			</div>
			<input
				required
				className="hidden"
				type="file"
				accept="image/*"
				id="photo"
				name="photo"
				onChange={(e) => {
					setImg({
						src: URL.createObjectURL(e.target.files[0]),
						file: e.target.files[0],
					});
				}}
			/>
			<label
				htmlFor="photo"
				className="flex flex-row items-center justify-center gap-2 rounded-lg py-2 border border-[#3C4BDC] text-[#3C4BDC] w-[200px]"
			>
				Добавить файл
				<img src={download} alt="icon" />
			</label>
		</div>
	);
};
