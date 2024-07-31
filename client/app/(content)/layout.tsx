import Sidebar from "@/components/custom/Sidebar";
import { ReactNode } from "react";

const layout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<main className="relative">
			<Sidebar />
			<div className="h-screen w-full pl-16">
				{children}
			</div>
		</main>
	);
};

export default layout;
