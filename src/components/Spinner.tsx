import React from "react";
import github_spinner from "src/components/layout/assets/github_spinner.gif";
import Image from "next/image";

const Spinner: React.FC = () => {
	return (
		<div className="w-100 mt-20">
			<Image
				width={180}
				className="text-centre mx-auto"
				src={github_spinner}
				alt="Loading..."
			/>
		</div>
	);
};

export default Spinner;
