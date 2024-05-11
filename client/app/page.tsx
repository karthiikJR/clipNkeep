import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ModeToggle />
			<div className="flex flex-col items-center space-y-8">
				<h1 className="text-4xl font-bold text-center">
					Welcome to <span className="text-blue-500">clipNkeep</span>
				</h1>
				<p className="text-lg text-center">
					A simple website to store your Links
				</p>
			</div>
		</main>
	);
}
