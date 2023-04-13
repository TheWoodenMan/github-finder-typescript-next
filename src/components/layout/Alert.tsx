import React from "react";
import { useContext } from "react";
import AlertContext from "@/context/alert/AlertContext";

const Alert: React.FC = () => {
	const alertContextType = useContext(AlertContext);
	const alert = alertContextType!.alert || { type: "", msg: "" };
	return (
		<div
			className={
				alert.type === "error"
					? "flex items-start mb-4 space-x-2 alert alert-warning shadow-lg text-base-300"
					: "flex items-start mb-4 space-x-2"
			}
		>
			{alert.type === "error" && (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					className="w-6 h-6 stroke-current mr-3"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
					></path>
				</svg>
			)}
			<p className="flex-1 text-base font-semibold leading-7 text-neutral-focus">
				<strong>{alert.msg}</strong>
			</p>
		</div>
	);
};

export default Alert;
