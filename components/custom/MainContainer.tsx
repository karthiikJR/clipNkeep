import React from "react";

function MainContainer({
	children,
	heading,
}: {
	children: React.ReactNode;
	heading: string;
}) {
	return (
		<section className="flex w-full min-h-screen flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">{heading}</h1>
			</div>
			<div
				className="w-full h-full sm:p-6 p-3 rounded-lg border border-dashed shadow-sm"
				x-chunk="dashboard-02-chunk-1"
			>
				{children}
			</div>
		</section>
	);
}

export default MainContainer;
