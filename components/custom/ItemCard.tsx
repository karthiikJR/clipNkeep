
import Image from "next/image";
import Link from "next/link";

import { PencilIcon, Trash2Icon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { ItemCardProps } from "@/lib/interface";

function ItemCard({ title, description, image, link, tags }: ItemCardProps) {
	return (
		<Card className="overflow-hidden max-w-80 h-fit">
			<CardHeader>
				<Link href={link} target="_blank" rel="noopener noreferrer">
					<CardTitle className="text-blue-500">{title}</CardTitle>
				</Link>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<span className="text-sm text-gray-500">Tags:</span>
				<div className="flex flex-wrap gap-2 py-4">
					{tags.map((tag, index) => (
						<Badge variant={"outline"} key={index}>
							{tag}
						</Badge>
					))}
				</div>
				<Image
					alt={title + " image"}
					className="aspect-square w-full rounded-md object-cover"
					height="300"
					src={image}
					width="300"
				/>
				<div className="flex gap-2 pt-4">
					<Button variant={"outline"} className="flex-1">
						<PencilIcon className="size-4" />
					</Button>
					<Button variant={"destructive"} className="flex-1">
						<Trash2Icon className="size-4" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

export default ItemCard;
