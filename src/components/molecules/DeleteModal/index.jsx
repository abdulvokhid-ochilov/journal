import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import del from "../../../assets/img/Delete.svg";

export function DeleteModal({ open, setOpen }) {
	function closeModal() {
		setOpen(false);
	}

	return (
		<>
			<Transition appear show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-semibold bg-[#F6F8F9] px-6 py-4 flex flex-row justify-between items-center"
									>
										Payment successful
										<IoCloseOutline
											stroke="#EF3F27"
											size={20}
											className="cursor-pointer"
											onClick={closeModal}
										/>
									</Dialog.Title>
									<div className="mt-10 flex flex-col items-center">
										<RiErrorWarningFill color="#EF3F27" size={20} />
										<p className="text-[#353437] text-sm">
											Вы уверены, что хотите удалить?
										</p>
									</div>

									<div className="mt-10 border border-[#DCDCE4] px-6 py-3 flex flex-row gap-2">
										<button
											className="text-[#353437] flex flex-row gap-2 items-center border border-[#DCDCE4] w-full rounded-md py-2 justify-center"
											onClick={closeModal}
										>
											Отменить
										</button>
										<button className="text-[#D02B20] flex flex-row gap-2 items-center border border-[#F5C0B8] w-full rounded-md py-2 bg-[#FCECEA] justify-center">
											<img src={del} alt="icon" className="w-3" />
											Удалить
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
