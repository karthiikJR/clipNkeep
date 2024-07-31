"use client";

import { ModeToggle } from "../mode-toggle";

import Image from "next/image";

import { navLinks } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquareUser } from "lucide-react";

function Sidebar() {
	return (
		<TooltipProvider>
			<aside className="fixed left-0 z-20 flex h-full flex-col border-r">
				<div className="border-b p-2">
					<Button variant="bg" size="icon" aria-label="Home">
						<Image
							src="/logo_without_bg.png"
							className="w-5 h-5"
							alt="Logo"
							width={1000}
							height={1000}
						/>
					</Button>
				</div>
				<nav className="grid gap-1 p-2">
					{navLinks.map((link) => {
						return (
							<Tooltip key={link.title}>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-lg"
										aria-label={link.title}
										onClick={() => window.location.href = link.link}
									>
										{link.icon}
									</Button>
								</TooltipTrigger>
								<TooltipContent side="right" sideOffset={5}>
									{link.title}
								</TooltipContent>
							</Tooltip>
						);
					})}
				</nav>
				<nav className="mt-auto grid gap-1 p-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<div className="mt-auto h-10 w-10 rounded-lg">
								<ModeToggle />
							</div>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Theme
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mt-auto rounded-lg"
								aria-label="Account"
							>
								<SquareUser className="size-5" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right" sideOffset={5}>
							Account
						</TooltipContent>
					</Tooltip>
				</nav>
			</aside>
		</TooltipProvider>
	);
}

export default Sidebar;
