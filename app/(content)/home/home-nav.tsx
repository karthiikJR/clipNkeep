import { Badge } from "@/components/ui/badge";

export default function HomeNav({
	tags,
	selectedTag,
	setSelectedTag,
}: {
	tags: string[];
	selectedTag: string;
	setSelectedTag: (tag: string) => void;
}) {
	return (
		<nav className="flex gap-2 flex-wrap">
			{tags.map((tag) => (
				<Badge
					key={tag}
					variant={tag === selectedTag ? "default" : "secondary"}
					className="cursor-pointer"
					onClick={() => setSelectedTag(tag)}
				>
					{tag.charAt(0).toUpperCase() + tag.slice(1)}
				</Badge>
			))}
		</nav>
	);
}
