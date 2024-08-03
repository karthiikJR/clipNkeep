"use client";

import { Button } from "@/components/ui/button";
import React from "react";

function NotFound() {
	return (
		<div className="w-screen h-screen flex-center flex-col gap-10 font-extrabold">
			<div className="absolute h-screen w-full">
				<svg
					className="w-screen h-screen opacity-40"
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 300 300"
				>
					<rect
						width="157.42"
						height="157.42"
						x="125.36"
						y="121.07"
						fill="#A5A6BC"
						rx="20"
						ry="20"
					></rect>
					<rect
						width="83.59"
						height="83.59"
						x="21.68"
						y="17.39"
						fill="#A5A6BC"
						opacity="0.25"
						rx="10"
						ry="10"
					></rect>
					<rect
						width="140.6"
						height="140.6"
						x="63.47"
						y="59.19"
						fill="#4e4f66"
						opacity="0.5"
						rx="15"
						ry="15"
					></rect>
				</svg>
			</div>
			<h1 className="sm:text-5xl text-3xl z-10">Page Not Found</h1>
			<Button onClick={() => (window.location.href = "/")} className="z-10">
				Go Home -{">"}
			</Button>
		</div>
	);
}

export default NotFound;
