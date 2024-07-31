"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center space-y-6">
			<Image
				src="/rotating_text.svg"
				alt="Rotating image"
				className="w-32 h-32"
				width={1000}
				height={1000}
			/>
			<h1 className="sm:text-7xl text-3xl text-dark dark:text-primary flex flex-col gap-2 font-extrabold text-center">
				Organize Your Links <span>Effortlessly</span>
			</h1>
			<p className="text-lg font-light text-center">
				Streamline Your Bookmarking Experience with Clip & Keep
			</p>
			<Button
				onClick={() => (window.location.href = "/auth")}
				className="rounded-full p-5 text-xs"
				variant="default"
			>
				{" "}
				Let&apos;s Gooo -{">"}
			</Button>
		</main>
	);
}
