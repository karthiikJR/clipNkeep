import React from "react";

function loading() {
	return (
		<div className="w-screen h-screen flex-center flex-col gap-10 font-extrabold">
			<span className="loader"></span>
			<h1 className="sm:text-5xl text-3xl">Loading...</h1>
		</div>
	);
}

export default loading;
