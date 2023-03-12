import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export function Dropdown({ values }) {
	const [value, setValue] = useState(values[0]);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex flex-row items-center gap-3">
					{value} <FiChevronDown />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{values.map((value, index) => (
							<Menu.Item key={index}>
								<span
									onClick={() => setValue(value)}
									className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
								>
									{value}
								</span>
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
