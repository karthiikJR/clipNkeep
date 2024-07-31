import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ItemData } from "./interface";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractUniqueTags(data: ItemData[]): string[] {
	const tagSet: Set<string> = new Set();

	tagSet.add("all");

	data.forEach((item) => {
		if (Array.isArray(item.tags)) {
			item.tags.forEach((tag) => tagSet.add(tag));
		}
	});

	return Array.from(tagSet);
}

export function filterByTag(selectedTag: string, data: ItemData[]): ItemData[] {
	if (selectedTag === "all") return data;
	return data.filter((item) => item.tags.includes(selectedTag));
}