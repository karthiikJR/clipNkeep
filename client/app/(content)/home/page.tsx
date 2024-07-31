"use client";

import React, { useState } from "react";

import MainContainer from "@/components/custom/MainContainer";

import { extractUniqueTags, filterByTag } from "@/lib/utils";
import { ItemData } from "@/lib/interface";

import HomeNav from "./home-nav";
import ItemCard from "@/components/custom/ItemCard";

function Home() {
	const [selectedTag, setSelectedTag] = useState("all");

	const data: ItemData[] = [
		{
			imgSrc:
				"https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			title: "Mountain Sunrise",
			description:
				"A beautiful sunrise over the mountains, showcasing vibrant colors and a serene landscape.",
			tags: ["nature", "landscape", "sunrise", "mountains"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			title: "Tranquil River",
			description:
				"A calm river flowing through a lush forest, perfect for a peaceful retreat.",
			tags: ["nature", "water", "forest", "tranquility"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
			title: "Desert Dunes",
			description:
				"Expansive sand dunes under a clear blue sky, capturing the essence of the desert.",
			tags: ["nature", "desert", "sand", "landscape"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
			title: "Forest Path",
			description:
				"A winding path through a dense forest, inviting exploration and adventure.",
			tags: ["nature", "forest", "path", "adventure"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			title: "Coastal Cliffs",
			description:
				"Dramatic cliffs overlooking the ocean, with waves crashing below.",
			tags: ["nature", "ocean", "cliffs", "coast"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			title: "Autumn Leaves",
			description:
				"A forest scene with trees covered in vibrant autumn leaves.",
			tags: ["nature", "autumn", "forest", "leaves"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
			title: "Snowy Peaks",
			description:
				"Snow-capped mountains under a bright blue sky, a winter wonderland.",
			tags: ["nature", "mountains", "snow", "winter"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1598818384697-62330d600309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
			title: "Tropical Paradise",
			description:
				"A tropical beach with clear blue waters and palm trees swaying in the breeze.",
			tags: ["nature", "beach", "tropical", "paradise"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
			title: "City Skyline",
			description:
				"A bustling city skyline at night, with lights reflecting off the water.",
			tags: ["city", "skyline", "night", "urban"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1547282548-b82b40322759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
			title: "Golden Wheat",
			description:
				"Fields of golden wheat under a sunny sky, swaying in the breeze.",
			tags: ["nature", "wheat", "fields", "agriculture"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
			title: "Mystic Forest",
			description:
				"A foggy forest with a mystical atmosphere, perfect for an adventure.",
			tags: ["nature", "forest", "fog", "mystical"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
			title: "Lush Jungle",
			description:
				"Dense jungle foliage with vibrant green leaves and a humid atmosphere.",
			tags: ["nature", "jungle", "greenery", "tropical"],
		},
		{
			imgSrc:
				"https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
			title: "Rocky Coastline",
			description:
				"A rugged coastline with rocks and waves crashing against them.",
			tags: ["nature", "coast", "rocks", "ocean"],
		},
	];

	const tags = extractUniqueTags(data);

	return (
		<MainContainer heading="Home">
			<HomeNav
				tags={tags}
				selectedTag={selectedTag}
				setSelectedTag={setSelectedTag}
			/>
			<div className="flex gap-4 flex-wrap pt-6">
				{filterByTag(selectedTag, data).length > 0 ? (filterByTag(selectedTag, data).map((item, index) => (
					<ItemCard
						key={index}
						description={item.description}
						image={item.imgSrc}
						link={item.imgSrc}
						title={item.title}
						tags={item.tags}
					></ItemCard>
				))) : (<div> No data found</div>)}
			</div>
		</MainContainer>
	);
}

export default Home;
