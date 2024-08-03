"use client";

import LinkDataForm from "@/components/forms/LinkDataForm";

import MainContainer from "@/components/custom/MainContainer";
import { linksSchema } from "@/lib/schema";
import { z } from "zod";

function Page() {
	function onSubmit(values: z.infer<typeof linksSchema>) {
		console.log(values + " edited");
	}
	return (
		<MainContainer heading="Edit">
			<div className="sm:w-1/2 mx-auto">
				<LinkDataForm onSubmit={onSubmit} typeOfForm="edit" formData={{
					link: "https://example.com",
					title: "Example",
					description: "This is an example",
					tags: "example, example2",
					imgSrc: "https://example.com/image.jpg",
				}} />
			</div>
		</MainContainer>
	);
}

export default Page;
